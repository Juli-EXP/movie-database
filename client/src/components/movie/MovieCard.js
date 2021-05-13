import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className="movieCard">
            <img
                src={movie.poster}
                alt={`${movie.title} poster`}
            />
            <a>{movie.title}</a>
            <span>
                {movie.rating}
            </span>
        </div>
    );
};

export default MovieCard;