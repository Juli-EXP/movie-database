import React, {useEffect, useState} from "react";
import axios from "axios";
import RatingCard from "./RatingCard";
import {Rating} from "../model/Rating";
import {API_URL} from "../../Constants";


interface RatingCardContainerProperty {
    movieID: number
}

const RatingCardContainer = (props: RatingCardContainerProperty) => {
    const {movieID} = props
    const [ratings, setRatings] = useState<Array<Rating>>([]);

    useEffect(() => {
        axios.get(`${API_URL}/rating/${movieID}`).then((res) => {
            setRatings(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [movieID]);

    return (
        <div className={"flex flex-col space-y-2"}>
            {ratings.map((element) => (
                <RatingCard
                    rating={element}
                />
            ))}
        </div>
    );
};

export default RatingCardContainer;