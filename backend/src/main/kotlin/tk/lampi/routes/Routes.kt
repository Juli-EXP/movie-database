package tk.lampi.routes

import io.ktor.routing.*
import io.ktor.application.*
import io.ktor.response.*


fun Application.configureRouting() {
    // Starting point for a Ktor app:
    routing {
        route("/api") {
            movieImageRouting()
            movieRouting()
            ratingRouting()
        }
    }

}
