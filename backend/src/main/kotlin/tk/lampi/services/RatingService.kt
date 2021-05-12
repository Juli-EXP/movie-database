package tk.lampi.services

import tk.lampi.models.Rating
import tk.lampi.util.DatabaseConnection
import java.sql.ResultSet

object RatingService {
    private val connection = DatabaseConnection.getConnection()


    //Turn a resultSet from sql to a kotlin class
    private fun resultToRating(rs: ResultSet): Rating {
        return Rating(
            rs.getInt("rating_id"),
            rs.getInt("movie_id"),
            rs.getDouble("rating"),
            rs.getString("comment"),
            rs.getString("username")
        )
    }

    fun getRating(movieID: Int, ratingID: Int): Rating? {
        val query = """
            SELECT *
            FROM rating
            WHERE movie_id = ? AND rating_id = ?
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setInt(1, movieID)
        ps.setInt(2, ratingID)

        val rs = ps.executeQuery()

        if (!rs.next()) {
            return null
        }

        return resultToRating(rs)
    }

    fun getAllRaitings(movieID: Int): ArrayList<Rating>? {
        val query = """
            SELECT * 
            FROM rating
            WHERE movie_id = ?
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setInt(1, movieID)

        val rs = ps.executeQuery()

        val ratingList = arrayListOf<Rating>()

        while (rs.next()) {
            val rating = resultToRating(rs)
            ratingList.add(rating)
        }

        if (ratingList.isEmpty()) {
            return null
        }

        return ratingList
    }

    fun addRating(movieID: Int, rating: Rating): Boolean {
        val query = """
            INSERT 
            INTO rating(movie_id, rating, comment, username)
            VALUES(?, ?, ?, ?)
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setInt(1, movieID)
        ps.setDouble(2, rating.rating)
        ps.setString(3, rating.comment)
        ps.setString(4, rating.username)

        val result = ps.executeUpdate() != 0

        MovieService.updateMovieRating(movieID)

        return result
    }

    fun updateRating(movieID: Int, ratingID: Int, rating: Rating): Boolean {
        val query = """
            UPDATE rating
            SET rating = ?, comment = ?, username = ?
            WHERE rating_id = ?
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setDouble(1, rating.rating)
        ps.setString(2, rating.comment)
        ps.setString(3, rating.username)
        ps.setInt(4, ratingID)

        val result = ps.executeUpdate() != 0

        MovieService.updateMovieRating(movieID)

        return result
    }

    fun deleteRating(movieID: Int, ratingID: Int) {
        val query = """
            DELETE FROM rating
            WHERE movie_id = ? AND rating_id = ?
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setInt(1, movieID)
        ps.setInt(2, ratingID)

        ps.executeUpdate()

        MovieService.updateMovieRating(movieID)
    }
}