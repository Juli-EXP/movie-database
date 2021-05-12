package tk.lampi.models

import kotlinx.serialization.Serializable


@Serializable
data class Rating(
    val ratingID: Int = 0,
    val movieID: Int = 0,
    val rating: Double = 0.0,
    val comment: String = "",
    val username: String = ""
)
