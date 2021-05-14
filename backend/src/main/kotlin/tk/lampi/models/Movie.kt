package tk.lampi.models

import kotlinx.serialization.Serializable


@Serializable
data class Movie(
    val id: Int = 0,
    val title: String = "",
    val description: String = "",
    val director: String = "",
    val length: Int = 0,
    val releaseDate: Int = 0,       //Stored as unix timestamp
    val genre: String = "",
    val ageRating: String = "",
    val rating: Double = 0.0,
    val image: String = ""
)
