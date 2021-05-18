import {API_URL} from "../../Constants";
import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieCardContainer = () => {
    const [update] = useState(false);
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        //Get a list of all movies
        axios.get(`${API_URL}/movie`)
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [update]);

    return (
        <div>
            <h1 className={"text-white text-2xl font-medium mx-4 mb-4"}>Movies</h1>
            <div className={"m-4 flex flex-wrap"}>
                {movies.map((element) => (
                    <MovieCard
                        movie={element}
                        key={element.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieCardContainer;