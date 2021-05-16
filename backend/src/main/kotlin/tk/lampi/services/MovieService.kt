package tk.lampi.services

import tk.lampi.models.Movie
import tk.lampi.util.DatabaseConnection
import java.sql.ResultSet


object MovieService {
    private val connection = DatabaseConnection.getConnection()


    //Turn a resultSet from sql to a kotlin class
    private fun resultToMovie(rs: ResultSet): Movie {
        return Movie(
            rs.getInt("movie_id"),
            rs.getString("title"),
            rs.getString("description") ?: "",
            rs.getString("director"),
            rs.getInt("length"),
            rs.getInt("release_date"),
            rs.getString("genre"),
            rs.getString("age_rating"),
            rs.getDouble("rating"),
            rs.getString("image") ?: ""
        )
    }

    fun getMovie(movieID: Int): Movie? {
        val query = """
            SELECT * 
            FROM movie
            WHERE movie_id = ?
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setInt(1, movieID)

        val rs = ps.executeQuery()

        if (!rs.next()) {
            return null
        }

        return resultToMovie(rs)
    }

    fun getAllMovies(): ArrayList<Movie>? {
        val query = """
            SELECT * 
            FROM movie
        """.trimIndent()

        val ps = connection.prepareStatement(query)

        val rs = ps.executeQuery()

        val movieList = arrayListOf<Movie>()

        while (rs.next()) {
            val movie = resultToMovie(rs)
            movieList.add(movie)
        }

        if (movieList.isEmpty()) {
            return null
        }

        return movieList
    }

    fun addMovie(movie: Movie): Boolean {
        val query = """
            INSERT 
            INTO movie(title, description, director, length, release_date, genre, age_rating)
            VALUES(?, ?, ?, ?, ?, ?, ?)
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setString(1, movie.title)
        ps.setString(2, movie.description)
        ps.setString(3, movie.director)
        ps.setInt(4, movie.length)
        ps.setInt(5, (System.currentTimeMillis() / 1000).toInt())
        ps.setString(6, movie.genre)
        ps.setString(7, movie.ageRating)

        return ps.executeUpdate() != 0
    }

    fun updateMovie(movieID: Int, movie: Movie): Boolean {
        val query = """
            UPDATE movie
            SET title = ?, description = ?, director = ?, length = ?, release_date = ?, genre = ?, age_rating = ?
            WHERE movie_id = ?                
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setString(1, movie.title)
        ps.setString(2, movie.description)
        ps.setString(3, movie.director)
        ps.setInt(4, movie.length)
        ps.setInt(5, movie.releaseDate)
        ps.setString(6, movie.genre)
        ps.setString(7, movie.ageRating)

        ps.setInt(8, movieID)

        return ps.executeUpdate() != 0
    }

    fun deleteMovie(movieID: Int) {
        val query = """
            DELETE FROM movie
            WHERE movie_id = ?
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setInt(1, movieID)

        ps.executeUpdate()
    }

    //Updates the avg rating of the movie it changes
    fun updateMovieRating(movieID: Int) {
        val query = """
            UPDATE movie
            SET rating = 
                (SELECT AVG(rating) as average
                FROM rating
                WHERE movie_id = ?)
            WHERE movie_id = ?
        """.trimIndent()

        val ps = connection.prepareStatement(query)
        ps.setInt(1, movieID)
        ps.setInt(2, movieID)

        ps.executeUpdate()
    }
}