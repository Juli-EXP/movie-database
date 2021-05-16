import {API_URL} from "../../Constants";
import React, {useEffect, useState} from "react";
import axios from "axios";
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
        <div>

            <div className="flex flex-wrap space-x-4 space-y-3 m-4">
                {data.map((element, index) => (
                    <MovieCard className
                               movie={element}
                               index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieCardContainer;