import React, {useState} from "react";
import {useParams, Redirect} from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import {API_URL} from "../../Constants";


const AddRating = () => {
    const [redirect, setRedirect] = useState(false);
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const {id} = useParams();

    const submit = () => {
        if (!username || !comment || rating < 1 || rating > 10) {
            return;
        }

        setRedirect(true);

        axios.post(`${API_URL}/rating/${id}`, {
            username: username,
            comment: comment,
            rating: rating,
        }).then((res) => {
            //console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <Navbar backPath={`/movie/${id}`}/>
            <div className={"mt-16 flex place-content-center"}>
                <form className={"ml-2 m-1 flex flex-col space-y-4"}>
                    <div>
                        <p>Username</p>
                        <input
                            className={"w-96 h-8"}
                            required={"required"}
                            type={"text"}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <p>Comment</p>
                        <textarea
                            className={"w-96 h-40 p-1 resize-y"}
                            required={"required"}
                            type={"text"}
                            onChange={e => setComment(e.target.value)}
                        />
                    </div>

                    <div>
                        <p>Rating</p>
                        <input
                            className={"w-96 h-8"}
                            required={"reqired"}
                            type={"number"}
                            min={1.0} max={10.0}
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <button
                        className={"add-button"}
                        onClick={submit}>
                        Add rating
                    </button>
                </form>
            </div>

            {redirect ? (
                <Redirect to={`/movie/${id}`}/>
            ) : null}
        </div>
    );
};

export default AddRating;