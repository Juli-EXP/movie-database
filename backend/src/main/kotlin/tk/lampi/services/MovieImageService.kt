package tk.lampi.services

import io.ktor.http.content.*
import io.ktor.utils.io.errors.*
import tk.lampi.util.DatabaseConnection
import java.io.File
import java.io.FileOutputStream
import java.nio.file.Files
import java.nio.file.Paths


object MovieImageService {
    private val imagePath = System.getenv("IMAGE_PATH") ?: "./images"
    private val connection = DatabaseConnection.getConnection()

    init {
        //Creates directory if it doesn't exist
        Files.createDirectories(Paths.get(imagePath))
    }


    private fun createFileName(movieID: Int): String? {
        val query = """
            SELECT title
            FROM movie
            WHERE movie_id = ?
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setInt(1, movieID)

        val rs = ps.executeQuery()
        if (!rs.next()) {
            return null
        }

        return rs.getString("title").replace(" ", "_") +
                "_" + System.currentTimeMillis() / 1000 + ".jpg"
    }

    private fun getFileName(movieID: Int): String? {
        val query = """
            SELECT image
            FROM movie
            WHERE movie_id = ?
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setInt(1, movieID)

        val rs = ps.executeQuery()
        if (!rs.next()) {
            return null
        }

        return rs.getString("image")
    }


    fun getImage(movieID: Int): File? {
        val query = """
            SELECT image 
            FROM movie
            WHERE movie_id = ?
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setInt(1, movieID)

        val rs = ps.executeQuery()

        if (!rs.next()) {
            return null
        }

        val image = File("$imagePath/${rs.getString("image")}")
        return if (image.exists()) {
            image
        } else {
            null
        }
    }

    suspend fun addImage(movieID: Int, imageParts: MultiPartData): Boolean {
        val imageName: String = createFileName(movieID) ?: return false //"$imagePath/$imageName"
        println("Ok")

        try {
            imageParts.forEachPart { part ->

                if (part is PartData.FileItem) {
                    val image = File("$imagePath/$imageName")
                    part.streamProvider().use { block ->
                        image.outputStream().buffered().use {
                            block.copyTo(it)
                        }
                    }
                } else {
                    part.dispose()
                    throw IOException("Error while reading file")
                }
            }
        } catch (e: IOException) {
            return false
        }

        val query = """
            UPDATE movie
            SET image = ?
            WHERE movie_id = ?    
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setString(1, imageName)
        ps.setInt(2, movieID)

        return ps.executeUpdate() != 0
    }

    fun updateImage(movieID: Int, imageParts: MultiPartData): Boolean {
        TODO("")
    }

    fun deleteImage(movieID: Int): Boolean {
        val query = """
            UPDATE movie
            SET image = NULL
            WHERE movie_id = ?
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setInt(1, movieID)

        return ps.executeUpdate() != 0
    }

}