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
        <div className="movieCardContainer">



            <div>
                {data.map((element, index) => (
                    <MovieCard
                        movie={element}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieCardContainer;