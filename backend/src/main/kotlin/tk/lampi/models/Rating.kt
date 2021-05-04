package tk.lampi.models

import kotlinx.serialization.Serializable


@Serializable
data class Rating(
    val ratingID: Int,
    val movieID: Int,
    val rating: Int,
    val comment: String,
    val username: String
)
