import React, {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import axios from "axios";
import RatingCardContainer from "../rating/RatingCardContainer";
import Navbar from "../navbar/Navbar";
import RatingStar from "../icon/RatingStar";
import {API_URL} from "../../Constants";


const MoviePage = () => {
    const history = useHistory();
    const [update] = useState(false);
    const [movie, setMovie] = useState({});
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState("Select an image");
    const [hasImage, setHasImage] = useState(false);
    const {id} = useParams();


    useEffect(() => {
        //Get information about a movie
        axios.get(`${API_URL}/movie/${id}`).then((res) => {
            setMovie(res.data);
        }).catch((err) => {
            console.log(err);
            history.push("/404");
        });

        //Check if movie poster exists
        axios.get(`${API_URL}/movie/${id}/image`).then((res) => {
            setHasImage(true);
        }).catch((err) => {
            console.log(err);
        });
    }, [update, id, history]);

    useEffect(() => {
        if (image) {
            setImageName(image.name);
        }
    }, [image]);

    const uploadImage = () => {
        if (!image) {
            return;
        }

        const formData = new FormData();
        formData.append("image", image, image.name);

        axios.post(`${API_URL}/movie/${id}/image`, formData).then((res) => {
            console.log(res);
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <Navbar buttonName={"Add rating"} buttonPath={`/movie/${id}/rating/add`}/>
            <div className={"flex flex-col ml-2"}>
                <span className={"text-white text-2xl flex flex-row flex-wrap"}>
                    <h1 className={"mr-2"}>{movie.title}</h1>
                    <span className={"flex flex-row"}>
                        <RatingStar className={"m-0.5 "}/>
                        <p>{Number((movie.rating || 0.0).toFixed(1))}</p>
                    </span>
                </span>

                <div className={"mt-2 flex flex-row flex-wrap space-y-4"}>
                    {hasImage ? (
                        <img className={"text-white w-96 h-full mr-4 animate-fade-in"}
                             src={`${API_URL}/movie/${id}/image`}
                             alt={"poster"}
                        />
                    ) : (
                        <span className={"mr-4 flex flex-col space-y-1"}>
                            <p>Upload a movie poster:</p>
                            <label className={"bg-accent-primary rounded-md font-bold px-2 p-1 w-max cursor-pointer"}>
                                {imageName}
                                <input
                                    className={"w-96 h-8 text-white hidden"}
                                    required={"required"}
                                    type={"file"}
                                    onChange={e => setImage(e.target.files[0])}
                                />
                            </label>
                            <button
                                className={"add-button"}
                                onClick={uploadImage}>
                                Add image
                            </button>
                        </span>
                    )}


                    <div className={"mr-4"}>
                        <div className={"movie-info"}>
                            <p className={"font-bold"}>Description:</p>
                            <p>{movie.description}</p>
                        </div>
                        <div className={"movie-info"}>
                            <p className={"font-bold"}>Director:</p>
                            <p>{movie.director}</p>
                        </div>
                        <div className={"movie-info"}>
                            <p className={"font-bold"}>Length:</p>
                            <p>{movie.length}</p>
                            <p>min.</p>
                        </div>
                        <div className={"movie-info"}>
                            <p className={"font-bold"}>Release date:</p>
                            <p>{new Date(movie.releaseDate * 1000).toLocaleDateString()}</p>
                        </div>
                        <div className={"movie-info"}>
                            <p className={"font-bold"}>Age rating:</p>
                            <p>{movie.ageRating}</p>
                        </div>
                    </div>

                    <RatingCardContainer movieID={id}/>
                </div>


            </div>
        </div>
    );
};

export default MoviePage;