package tk.lampi.routes

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import tk.lampi.models.Rating
import tk.lampi.services.RatingService
import java.lang.NumberFormatException


fun Route.ratingRouting() {
    route("/rating") {

        //Get all ratings
        get("{movieID}") {
            val movieID =
                call.parameters["movieID"] ?: return@get call.respondText("", status = HttpStatusCode.BadRequest)
            val ratingList: ArrayList<Rating>

            try {
                ratingList =
                    RatingService.getAllRaitings(movieID.toInt()) ?: return@get call.respondText(
                        "",
                        status = HttpStatusCode.NoContent
                    )
            } catch (e: Exception) {
                return@get call.respondText("", status = HttpStatusCode.InternalServerError)
            }

            return@get if (ratingList.isEmpty()) {
                call.respondText("", status = HttpStatusCode.NoContent)
            } else {
                call.respond(ratingList)
            }
        }

        //Get a specific rating
        get("{movieID}/{ratingID}") {
            val movieID =
                call.parameters["movieID"] ?: return@get call.respondText("", status = HttpStatusCode.BadRequest)
            val ratingID =
                call.parameters["ratingID"] ?: return@get call.respondText("", status = HttpStatusCode.BadRequest)
            val rating: Rating

            try {
                rating = RatingService.getRating(movieID.toInt(), ratingID.toInt()) ?: return@get call.respond(
                    HttpStatusCode.NoContent
                )
            } catch (e: Exception) {
                return@get call.respondText("", status = HttpStatusCode.InternalServerError)
            }

            return@get call.respond(rating)

        }

        //Add a rating
        post("{movieID}") {
            val movieID =
                call.parameters["movieID"] ?: return@post call.respondText("", status = HttpStatusCode.BadRequest)
            val success: Boolean

            try {
                val rating = call.receive<Rating>()
                success = RatingService.addRating(movieID.toInt(), rating)

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

        //Update a rating+
        put("{movieID}/{ratingID}") {
            val movieID =
                call.parameters["movieID"] ?: return@put call.respondText("", status = HttpStatusCode.BadRequest)
            val ratingID =
                call.parameters["ratingID"] ?: return@put call.respondText("", status = HttpStatusCode.BadRequest)
            val success: Boolean

            try {
                val rating = call.receive<Rating>()
                success = RatingService.updateRating(movieID.toInt(), ratingID.toInt(), rating)

            } catch (e: ContentTransformationException) {
                return@put call.respondText("", status = HttpStatusCode.BadRequest)
            } catch (e: Exception) {
                e.printStackTrace()
                return@put call.respondText("", status = HttpStatusCode.InternalServerError)
            }

            return@put if (success) {
                call.respondText("", status = HttpStatusCode.OK)
            } else {
                call.respondText("", status = HttpStatusCode.BadRequest)
            }
        }

        //Delete a rating
        delete("{movieID}/{ratingID}") {
            val movieID =
                call.parameters["movieID"] ?: return@delete call.respondText("", status = HttpStatusCode.BadRequest)
            val ratingID =
                call.parameters["ratingID"] ?: return@delete call.respondText("", status = HttpStatusCode.BadRequest)

            try {
                RatingService.deleteRating(movieID.toInt(), ratingID.toInt())

            } catch (e: NumberFormatException) {
                return@delete call.respondText("", status = HttpStatusCode.BadRequest)
            } catch (e: Exception) {
                return@delete call.respondText("", status = HttpStatusCode.InternalServerError)
            }

            return@delete call.respondText("", status = HttpStatusCode.OK)
        }
    }
}