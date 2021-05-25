import {API_URL} from "../../Constants";
import RatingStar from "../Icons/RatingStar";
import {Link} from "react-router-dom";


const MovieCard = ({movie}) => {
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
};

export default MovieCard;