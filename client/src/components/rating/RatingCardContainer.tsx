import React, {useEffect, useState} from "react";
import axios from "axios";
import RatingCard from "./RatingCard";
import {Rating} from "../model/Rating";
import {API_URL} from "../../Constants";


interface RatingCardContainerProperty {
    movieID: number
    className?: String
}

const RatingCardContainer = (props: RatingCardContainerProperty) => {
    const {movieID, className} = props
    const [ratings, setRatings] = useState<Array<Rating>>([]);

    useEffect(() => {
        axios.get(`${API_URL}/rating/${movieID}`)
            .then((res) => {
                setRatings(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [movieID]);

    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            {ratings.map((element, index) => (
                <RatingCard
                    rating={element}
                    key={index}
                />
            ))}
        </div>
    );
};

export default RatingCardContainer;