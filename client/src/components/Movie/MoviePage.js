import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../Constants";
import RatingStar from "../Icons/RatingStar";


const MoviePage = () => {
    const [update] = useState(false);
    const [movie, setMovie] = useState({});
    const {id} = useParams();


    useEffect(() => {
        //Get information about a movie
        axios.get(`${API_URL}/movie/${id}`)
            .then((res) => {
                setMovie(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [update, id]);

    return (
        <div className={"flex flex-col"}>
            <span className={"text-white m-1 flex flex-row"}>
                <h1>{movie.title}</h1>
                <RatingStar className={"m-0.5"}/>
                <p>{Number((movie.rating || 0.0).toFixed(1))}</p>
            </span>

            <img className={"text-white animate-fade-in"}
                 src={`${API_URL}/movie/${id}/image`}
                 alt={"poster"}
            />

            <p>{movie.description}</p>
            <p>{movie.director}</p>
            <p>{movie.length}</p>
            <p>{new Date(movie.releaseDate).toLocaleDateString()}</p>
            <p>{movie.ageRating}</p>
        </div>

    );
};

export default MoviePage;