package tk.lampi.routes

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import tk.lampi.services.MovieImageService
import java.io.File


fun Route.movieImageRouting() {
    route("/movie") {

        //Send the image from a movie
        get("{movieID}/image") {
            val movieID =
                call.parameters["movieID"] ?: return@get call.respondText("", status = HttpStatusCode.BadRequest)
            val image: File

            try {
                image = MovieImageService.getImage(movieID.toInt()) ?: return@get call.respondText(
                    "",
                    status = HttpStatusCode.NotFound
                )
            } catch (e: Exception) {
                return@get call.respondText("", status = HttpStatusCode.InternalServerError)
            }

            return@get call.respondFile(image)
        }

        //Add a image to a movie
        post("{movieID}/image") {
            val movieID =
                call.parameters["movieID"] ?: return@post call.respondText("", status = HttpStatusCode.BadRequest)

        }

        //Update the image from a movie
        put("{movieID}/image") {
            val movieID =
                call.parameters["movieID"] ?: return@put call.respondText("", status = HttpStatusCode.BadRequest)
        }

        //Delete the image from a movie
        delete("{movieID}/image") {
            val movieID =
                call.parameters["movieID"] ?: return@delete call.respondText("", status = HttpStatusCode.BadRequest)
        }

    }
}