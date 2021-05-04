package tk.lampi.routes

import io.ktor.routing.*
import io.ktor.application.*


fun Application.configureRouting() {
    // Starting point for a Ktor app:
    routing {
        route("/api") {
            movieRouting()
            ratingRouting()
        }
    }

}
