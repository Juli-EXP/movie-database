import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../Constants";
import MovieCard from "./MovieCard";

const MovieCardContainer = () => {
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState(false);


    useEffect(() => {
        //Get a list of all movies
        axios.get(`${API_URL}/movie`)
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [update]);

    return (
        <div className="flex flex-wrap space-x-4">
            {data.map((element, index) => (
                <MovieCard className
                           movie={element}
                           index={index}
                />
            ))}
        </div>
    );
};

export default MovieCardContainer;