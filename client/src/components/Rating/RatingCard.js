import React from "react";
import RatingStar from "../Icons/RatingStar";


const RatingCard = ({rating}) => {
    return (
        <div className={"w-96 md: p-2 bg-primary hover:bg-secondary"}>
            <p className={"font-bold"}>{rating.username}</p>
            <p>{rating.comment}</p>
            <p>{rating.rating}</p>
            <span className={"text-white text-2xl flex flex-row"}>
                <RatingStar className={"m-0.5 "}/>
                <p>{Number((movie.rating || 0.0).toFixed(1))}</p>
            </span>

        </div>
    );
};

export default RatingCard;