import {API_URL} from "../../Constants";
import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Navbar from "../Navbar/Navbar";


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

        //TODO change navbar content
    }, [update]);

    return (
        <div>
            <Navbar buttonName={"Add movie"} path={""}/>
            <div className={"mt-2 flex flex-wrap"}>
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