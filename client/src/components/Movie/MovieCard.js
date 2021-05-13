import React from "react";

const MovieCard = (props) => {
    return (
        <div className="movieCard">
            <img
                src={props.movie.poster}
                alt={`${props.movie.title} poster`}
            />

            <a>{props.movie.title}</a>

            <span>
                {props.movie?.rating || 0.0}
            </span>
        </div>
    );
};

export default MovieCard;