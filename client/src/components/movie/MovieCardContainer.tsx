import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Navbar from "../navbar/Navbar";
import {Movie} from "../model/Movie";
import {API_URL} from "../../Constants";


const MovieCardContainer = () => {
    const [movies, setMovies] = useState<Array<Movie>>([]);

    useEffect(() => {
        //Get a list of all movies
        axios.get(`${API_URL}/movie`)
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    return (
        <div>
            <Navbar buttonName={"Add movie"} buttonPath={"/movie/add"}/>
            <div className={"mt-2 flex flex-wrap"}>
                {movies.map((element, index) => (
                    <MovieCard
                        movie={element}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieCardContainer;