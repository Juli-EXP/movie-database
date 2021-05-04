package tk.lampi.routes

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import tk.lampi.models.Movie
import tk.lampi.services.MovieService
import java.lang.NumberFormatException


fun Route.movieRouting() {
    route("/movie") {
        get("{movieID}") {
            val movieID = call.parameters["movieID"] ?: return@get call.respond(HttpStatusCode.NotFound)

            val movie: Movie
            try {
                movie = MovieService.getMovie(movieID.toInt()) ?: return@get call.respond(HttpStatusCode.NoContent)

            } catch (e: Exception) {
                return@get call.respond(HttpStatusCode.InternalServerError)
            }

            return@get call.respond(movie)
        }

        get {
            val movieList: ArrayList<Movie>
            try {
                movieList = MovieService.getAllMovies() ?: return@get call.respond(HttpStatusCode.NoContent)
                println("naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            } catch (e: Exception) {
                return@get call.respond(HttpStatusCode.InternalServerError)
            }

            return@get call.respond(movieList)
        }

        post {
            val success: Boolean
            try {
                val movie = call.receive<Movie>()
                success = MovieService.addMovie(movie)

            } catch (e: ContentTransformationException) {
                return@post call.respond(HttpStatusCode.BadRequest)
            } catch (e: Exception) {
                return@post call.respond(HttpStatusCode.InternalServerError)
            }

            return@post if (success) {
                call.respond(HttpStatusCode.Created)
            } else {
                call.respond(HttpStatusCode.BadRequest)
            }
        }

        put("{movieID}") {
            return@put call.respond(HttpStatusCode.NotImplemented)
        }

        delete("{movieID}") {
            val movieID = call.parameters["movieID"] ?: return@delete call.respond(HttpStatusCode.NotFound)

            try {
                MovieService.deleteMovie(movieID.toInt())

            } catch (e: NumberFormatException) {
                return@delete call.respond(HttpStatusCode.BadRequest)
            } catch (e: Exception) {
                return@delete call.respond(HttpStatusCode.InternalServerError)
            }

            return@delete call.respond(HttpStatusCode.OK)
        }
    }
}