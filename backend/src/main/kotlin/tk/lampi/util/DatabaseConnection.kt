package tk.lampi.util

import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException


object DatabaseConnection {
    private val host = System.getenv("DB_HOST") ?: "localhost"
    private val username = System.getenv("DB_USERNAME") ?: "root"
    private val password = System.getenv("DB_PASSWORD") ?: "password"
    private val database = System.getenv("DB_DATABASE") ?: "movie-database"
    private val url = "jdbc:mysql://$host:3306/"
    private const val options = "?characterEncoding=utf8"


    @Throws(ClassNotFoundException::class, SQLException::class)
    fun getConnection(database: String = this.database): Connection {
        Class.forName("com.mysql.jdbc.Driver")
        return DriverManager.getConnection(url + database + options, username, password)
    }
}