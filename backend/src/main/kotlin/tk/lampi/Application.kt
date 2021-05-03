package tk.lampi

import io.ktor.application.*
import io.ktor.features.*
import io.ktor.routing.*
import io.ktor.serialization.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import kotlinx.serialization.json.Json
import tk.lampi.routes.configureRouting


val PORT = System.getenv("PORT") ?: 4000

fun main() {
    embeddedServer(Netty, port = PORT as Int, host = "0.0.0.0") {
        install(Routing)
        install(CORS) {
            anyHost()
        }
        install(ContentNegotiation) {
            json(Json {
                ignoreUnknownKeys = true
                prettyPrint = true
            })
        }


        configureRouting()
    }.start(wait = true)
}
