import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import {API_URL} from "../../Constants";


const AddMovie = () => {
    const [redirect, setRedirect] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [director, setDirector] = useState("");
    const [length, setLength] = useState(0);
    const [releaseDate, setReleaseDate] = useState(0);
    const [ageRating, setAgeRating] = useState("");

    const submit = () => {
        if (!title || !description || !director ||
            !ageRating || !releaseDate || !length) {
            return;
        }

        setRedirect(true);  //Todo change

        axios.post(`${API_URL}/movie`, {
            title: title,
            description: description,
            director: director,
            length: length,
            releaseDate: releaseDate,
            ageRating: ageRating,
        }).then((res) => {

        }).catch((err) => {
            console.log(err);
            //Todo display error
        });

        //Todo useeffect
    };

    return (
        <div>
            <Navbar/>
            <div className={"mt-16 flex place-content-center"}>
                <form className={"ml-2 m-1 flex flex-col space-y-4"}>
                    <span>
                        <p>Title</p>
                        <input
                            className={"w-96 h-8"}
                            required={"reqired"}
                            type={"text"}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </span>

                    <span>
                        <p>Description</p>
                        <textarea
                            className={"w-96 h-40 p-1 resize-y"}
                            required={"reqired"}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </span>

                    <span>
                        <p>Director</p>
                        <input
                            className={"w-96 h-8"}
                            required={"reqired"}
                            type={"text"}
                            onChange={e => setDirector(e.target.value)}
                        />
                    </span>

                    <span>
                        <p>Length</p>
                        <input
                            className={"w-96 h-8"}
                            required={"reqired"}
                            type={"number"}
                            min={1} max={60000}
                            onChange={e => setLength(e.target.value)}
                        />
                    </span>

                    <span>
                        <p>Release date</p>
                        <input
                            className={"w-96 h-8"}
                            required={"reqired"}
                            type={"date"}
                            onChange={e =>setReleaseDate(new Date(e.target.value).getTime() / 1000)}
                        />
                    </span>

                    <span>
                        <p>Age Rating</p>
                        <input
                            className={"w-96 h-8"}
                            required={"reqired"}
                            type={"text"}
                            onChange={e => setAgeRating(e.target.value)}
                        />
                    </span>

                    <button
                        className={"add-button"}
                        onClick={submit}>
                        Add movie
                    </button>
                </form>
            </div>

            {redirect ? (
                <Redirect to={"/"}/>
            ) : null}
        </div>
    );
};

export default AddMovie;