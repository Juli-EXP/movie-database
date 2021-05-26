import React from "react";
import {Link} from "react-router-dom";
import RatingStar from "../icon/RatingStar";
import {Movie} from "../model/Movie";
import {API_URL} from "../../Constants";


class MovieCard extends React.Component<{ movie: Movie }> {
    render() {
        let {movie} = this.props;

        return (
            <Link
                to={`movie/${movie.id}`}
                className={"" +
                "bg-primary hover:bg-secondary m-2 w-40 h-80 " +
                "transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 " +
                "flex flex-col justify-between animate-fade-in-down"}
            >
                <img className={"text-white animate-fade-in"}
                     src={`${API_URL}/movie/${movie.id}/image`}
                     alt={"poster"}
                />

                <div className={"mb-auto"}>
                    <div className={"text-white mx-1 mt-1 flex flex-row"}>
                        <RatingStar className={"m-0.5"}/>
                        <p>{Number((movie.rating || 0.0).toFixed(1))}</p>
                    </div>

                    <p className={"mx-1 line-clamp-2"}>{movie.title}</p>
                </div>
            </Link>
        );
    }
}

export default MovieCard;