import {API_URL} from "../../Constants";
import RatingStar from "../Icons/RatingStar";
import {Link} from "react-router-dom";


const MovieCard = ({key, movie}) => {
    return (
        <Link
            to={`movie/${movie.id}`}
            className={"bg-primary m-2 w-40 hover:bg-secondary flex flex-col animate-fade-in-down"}
        >
            <img className={"text-white animate-fade-in"}
                 src={`${API_URL}/movie/${movie.id}/image`}
                 alt={"poster"}
            />

            <span className={"text-white m-1 flex flex-row"}>
                <RatingStar className={"m-0.5"}/>
                <p>{Number((movie.rating || 0.0).toFixed(1))}</p>
            </span>

            <p className={"mx-1"}>{movie.title}</p>
        </Link>
    );
};

export default MovieCard;