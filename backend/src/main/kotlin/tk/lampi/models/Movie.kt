package tk.lampi.models

import kotlinx.serialization.Serializable


@Serializable
data class Movie(
    val id: Int,
    val title: String,
    val director: String,
    val lenght: Int,
    val releaseDate: Int,   //Stored as unix timestamp
    val genre: Array<String>,
    val ageRating: String,
    val rating: Double
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Movie

        if (title != other.title) return false
        if (director != other.director) return false
        if (rating != other.rating) return false
        if (lenght != other.lenght) return false
        if (releaseDate != other.releaseDate) return false
        if (!genre.contentEquals(other.genre)) return false

        return true
    }

    override fun hashCode(): Int {
        var result = title.hashCode()
        result = 31 * result + director.hashCode()
        result = 31 * result + rating.hashCode()
        result = 31 * result + lenght
        result = 31 * result + releaseDate
        result = 31 * result + genre.contentHashCode()
        return result
    }
}
