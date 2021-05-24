package tk.lampi.routes

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import tk.lampi.controllers.MovieImageController
import java.io.File
import java.lang.NumberFormatException


fun Route.movieImageRouting() {
    route("/movie") {

        //Send the image from a movie
        get("{movieID}/image") {
            val movieID =
                call.parameters["movieID"] ?: return@get call.respondText("", status = HttpStatusCode.BadRequest)
            val image: File

            try {
                image = MovieImageController.getImage(movieID.toInt()) ?: return@get call.respondText(
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
            val success: Boolean

            try {
                val imageParts = call.receiveMultipart()
                success = MovieImageController.addImage(movieID.toInt(), imageParts)

            } catch (e: Exception) {
                return@post call.respondText("", status = HttpStatusCode.InternalServerError)
            }

            return@post if (success) {
                call.respondText("", status = HttpStatusCode.OK)
            } else {
                call.respondText("", status = HttpStatusCode.BadRequest)
            }
        }

        //Update the image from a movie
        put("{movieID}/image") {
            val movieID =
                call.parameters["movieID"] ?: return@put call.respondText("", status = HttpStatusCode.BadRequest)

            return@put call.respondText("", status = HttpStatusCode.NotImplemented)
        }

        //Delete the image from a movie
        delete("{movieID}/image") {
            val movieID =
                call.parameters["movieID"] ?: return@delete call.respondText("", status = HttpStatusCode.BadRequest)
            val success: Boolean

            try {
                success = MovieImageController.deleteImage(movieID.toInt())

            } catch (e: NumberFormatException) {
                return@delete call.respondText("", status = HttpStatusCode.BadRequest)
            } catch (e: Exception) {
                return@delete call.respondText("", status = HttpStatusCode.InternalServerError)
            }

            return@delete if (success) {
                call.respondText("", status = HttpStatusCode.OK)
            } else {
                call.respondText("", status = HttpStatusCode.BadRequest)
            }
        }

    }
}