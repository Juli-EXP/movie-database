import React from "react";
import RatingStar from "../Icons/RatingStar";

const MovieCard = (props) => {
    return (
        <div className="
        bg-primary
        mt-4 w-40
        flex flex-col">
            <img
                src={props.movie.poster}
                alt={`poster`}
            />

            <span className="flex">
                <RatingStar/>
                {props.movie?.rating || 0.0}
            </span>

            <p className="justify-items-end">{props.movie.title}</p>
        </div>
    );
};

export default MovieCard;