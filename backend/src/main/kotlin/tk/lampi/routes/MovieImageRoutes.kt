package tk.lampi.routes

import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*

fun Route.movieImageRouting() {
    route("/movie") {
        get("{movieID}/image") {
            println("ok")
            call.respondText(call.parameters["movieID"] + "image")
        }

        post("{movieID}/image") {

        }

        put("{movieID}/image") {

        }

        delete("{movieID}/image") {

        }

    }
}