import {API_URL} from "../../Constants";
import RatingStar from "../Icons/RatingStar";
import {Link} from "react-router-dom";


const MovieCard = (props) => {
    return (
        <Link
            to={`movie/${props.movie.id}`}
            className={"bg-foreground m-2 w-40 flex flex-col animate-fade-in-down"}
        >
            <img className={"text-white animate-fade-in"}
                 src={`${API_URL}/movie/${props.movie.id}/image`}
                 alt={"poster"}
            />

            <span className={"text-white m-1 flex flex-row"}>
                <RatingStar/>
                {props.movie.rating}
            </span>

            <p className={"mx-1"}>{props.movie.title}</p>
        </Link>
    );
};

export default MovieCard;