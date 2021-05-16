package tk.lampi.services

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
        Files.createDirectories(Paths.get(imagePath))
    }


    fun createFileName(movieID: Int): String? {
        val query = """
            SELECT name
            FROM movie
            WHERE movie_id = ?
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setInt(1, movieID)

        val rs = ps.executeQuery()
        if (!rs.next()) {
            return null
        }

        return rs.getString("name").replace(" ", "_") + System.currentTimeMillis() / 1000
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

    //TODO error handling
    fun addImage(movieID: Int, image: ByteArray): Boolean? {
        val imageName: String = createFileName(movieID) ?: return false

        val fos = FileOutputStream("$imagePath/$imageName")
        try {
            fos.write(image)
        } catch (e: IOException) {
            return null
        } finally {
            fos.close()
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

    fun updateImage(movieID: Int, image: File): Boolean {
        TODO()
    }

    fun deleteImage(movieID: Int) {
        TODO()
    }

}