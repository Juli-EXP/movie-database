import React from "react";
import {Rating} from "../model/Rating";
import RatingStar from "../icon/RatingStar";


interface RatingCardProperty {
    rating: Rating
}

const RatingCard = (props: RatingCardProperty) => {
    const {rating} = props;

    return (
        <div className={"w-96 md: p-2 bg-primary hover:bg-secondary"}>
            <p className={"font-bold"}>{rating.username}</p>
            <p>{rating.comment}</p>
            <span className={"text-white text-1xl flex flex-row"}>
                <RatingStar className={"m-0.5"}/>
                <p>{Number((rating.rating || 0.0).toFixed(1))}</p>
            </span>
        </div>
    );
}

export default RatingCard;