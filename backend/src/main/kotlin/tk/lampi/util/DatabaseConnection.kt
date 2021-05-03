package tk.lampi.util

import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException


object DatabaseConnection {
    private const val url = "jdbc:mysql://localhost:3306/"
    private const val database = "movie-database"
    private const val user = "root"
    private const val password = ""

    @Throws(ClassNotFoundException::class, SQLException::class)
    fun getConnection(database: String = this.database): Connection {
        Class.forName("com.mysql.jdbc.Driver")
        return DriverManager.getConnection(url + database, user, password)
    }
}