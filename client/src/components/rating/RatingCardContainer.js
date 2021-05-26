import React, {useEffect, useState} from "react";
import {API_URL} from "../../Constants";
import axios from "axios";
import RatingCard from "./RatingCard";


const RatingCardContainer = ({movieID}) => {
    const [update] = useState(false);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        //Get a list of all ratings
        axios.get(`${API_URL}/rating/${movieID}`).then((res) => {
            setRatings(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [update, movieID]);

    return (
        <div className={"flex flex-col space-y-2"}>
            {ratings.map((element, index) => (
                <RatingCard
                    rating={element}
                    key={element.ratingID || index}
                />
            ))}
        </div>
    );
};

export default RatingCardContainer;