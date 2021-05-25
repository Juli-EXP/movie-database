import React from "react";
import Navbar from "../Navbar/Navbar";
import AddButton from "../Buttons/AddButton";


const AddMovie = () => {
    const submit = () => {

    };

    return (
        <div>
            <Navbar/>
            <div className={"ml-2 m-1 flex flex-col space-y-4"}>
                <div>
                    <p>Title</p>
                    <input/>
                </div>
                <div>
                    <p>Description</p>
                    <textarea className={"resize"}/>
                </div>
                <div>
                    <p>Author</p>
                    <input/>
                </div>
                <div>
                    <p>Length</p>
                    <input/>
                </div>
                <div>
                    <p>Duration</p>
                    <input/>
                </div>
                <div>
                    <p>Age Rating</p>
                    <input/>
                </div>
                <button
                    className={"bg-accent-primary rounded-md font-bold px-2 p-1 w-max"}>
                    Add movie
                </button>
            </div>
        </div>
    );
};

export default AddMovie;