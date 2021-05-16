import {API_URL} from "../../Constants";
import RatingStar from "../Icons/RatingStar";


const MovieCard = (props) => {
    return (
        <div className="
        bg-foreground
        w-40
        flex flex-col">
            <img
                src={`${API_URL}/movie/${props.movie.id}/image`}
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