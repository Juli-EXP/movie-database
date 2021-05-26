import React, {useState} from "react";
import {useParams} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import {API_URL} from "../../Constants";


const AddRating = () => {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const {id} = useParams();

    const submit = () => {
        console.log(username, comment, rating);

        axios.post(`${API_URL}/rating/${id}`, {
            username: username,
            comment: comment,
            rating: rating,
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <Navbar backPath={`/movie/${id}`}/>
            <form className={"ml-2 m-1 flex flex-col space-y-4"}>
                <div>
                    <p>Username</p>
                    <input className={"input-info"} onChange={e => setUsername(e.target.value)}/>
                </div>

                <div>
                    <p>Comment</p>
                    <textarea className={"input-info resize-y"} onChange={e => setComment(e.target.value)}/>
                </div>

                <div>
                    <p>Rating</p>
                    <input
                        className={"input-info"}
                        type={"number"}
                        min={0.0} max={10.0}
                        onChange={e => setRating(e.target.value)}/>
                </div>

                <button
                    className={"bg-accent-primary rounded-md font-bold px-2 p-1 w-max"}
                    onClick={submit}>
                    Add movie
                </button>
            </form>
        </div>
    );
};

export default AddRating;