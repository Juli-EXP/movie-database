import React from "react";
import {useParams} from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const AddRating = () => {
    const {id} = useParams();

    const submit = () => {

    };

    return (
        <div>
            <Navbar/>
            <div className={"ml-2 m1"}>
                <p>Username</p>
                <input></input>

                <p>Description</p>
                <input></input>

                <p>Rating</p>
                <input></input>
            </div>
        </div>
    );
};

export default AddRating;