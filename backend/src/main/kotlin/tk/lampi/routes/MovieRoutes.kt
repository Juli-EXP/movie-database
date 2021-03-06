package tk.lampi.routes

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import tk.lampi.models.Movie
import tk.lampi.controllers.MovieController
import java.lang.NumberFormatException


fun Route.movieRouting() {
    route("/movie") {

        //Get all movies
        get {
            val movieList: ArrayList<Movie>

            try {
                movieList =
                    MovieController.getAllMovies() ?: return@get call.respondText("", status = HttpStatusCode.NotFound)
            } catch (e: Exception) {
                e.printStackTrace()
                return@get call.respondText("", status = HttpStatusCode.InternalServerError)
            }

            return@get if (movieList.isEmpty()) {
                call.respondText("", status = HttpStatusCode.NotFound)
            } else {
                call.respond(movieList)
            }

        }

        //Get a specific movie
        get("{movieID}") {
            val movieID =
                call.parameters["movieID"] ?: return@get call.respondText("", status = HttpStatusCode.BadRequest)
            val movie: Movie

            try {
                movie = MovieController.getMovie(movieID.toInt()) ?: return@get call.respondText(
                    "",
                    status = HttpStatusCode.NotFound
                )

            } catch (e: Exception) {
                return@get call.respondText("", status = HttpStatusCode.InternalServerError)
            }

            return@get call.respond(movie)
        }

        //Add a movie
        post {
            val success: Boolean

            try {
                val movie = call.receive<Movie>()
                success = MovieController.addMovie(movie)

            } catch (e: ContentTransformationException) {
                return@post call.respondText("", status = HttpStatusCode.BadRequest)
            } catch (e: Exception) {
                e.printStackTrace()
                return@post call.respondText("", status = HttpStatusCode.InternalServerError)
            }

            return@post if (success) {
                call.respondText("", status = HttpStatusCode.OK)
            } else {
                call.respondText("", status = HttpStatusCode.BadRequest)
            }
        }

        //Update a movie
        put("{movieID}") {
            val movieID =
                call.parameters["movieID"] ?: return@put call.respondText("", status = HttpStatusCode.BadRequest)
            val success: Boolean

            try {
                val movie = call.receive<Movie>()
                success = MovieController.updateMovie(movieID.toInt(), movie)

            } catch (e: ContentTransformationException) {
                return@put call.respondText("", status = HttpStatusCode.BadRequest)
            } catch (e: Exception) {
                return@put call.respondText("", status = HttpStatusCode.InternalServerError)
            }

            return@put if (success) {
                call.respondText("", status = HttpStatusCode.OK)
            } else {
                call.respondText("", status = HttpStatusCode.BadRequest)
            }
        }

        //Delete a movie
        delete("{movieID}") {
            val movieID =
                call.parameters["movieID"] ?: return@delete call.respondText("", status = HttpStatusCode.BadRequest)

            try {
                MovieController.deleteMovie(movieID.toInt())

            } catch (e: NumberFormatException) {
                return@delete call.respondText("", status = HttpStatusCode.BadRequest)
            } catch (e: Exception) {
                return@delete call.respondText("", status = HttpStatusCode.InternalServerError)
            }

            return@delete call.respondText("", status = HttpStatusCode.OK)
        }
    }
}