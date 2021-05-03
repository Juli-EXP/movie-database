package tk.lampi.models

import kotlinx.serialization.Serializable


@Serializable
data class Rating(
    val id: Int,
    val movieID: Int,
    val rating: Int,
    val comment: String,
    val username: String
)
