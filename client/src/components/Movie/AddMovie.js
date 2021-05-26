import React from "react";
import Navbar from "../Navbar/Navbar";
import AddButton from "../Shared/AddButton";


const AddMovie = () => {
    const submit = () => {

    };

    return (
        <div>
            <Navbar/>
            <form className={"ml-2 m-1 flex flex-col space-y-4"}>
                <div>
                    <p>Title</p>
                    <input className={"input-info"}/>
                </div>

                <div>
                    <p>Description</p>
                    <textarea className={"input-info resize-y"}/>
                </div>

                <div>
                    <p>Author</p>
                    <input className={"input-info"}/>
                </div>

                <div>
                    <p>Length</p>
                    <input className={"input-info"}/>
                </div>

                <div>
                    <p>Duration</p>
                    <input className={"input-info"}/>
                </div>

                <div>
                    <p>Age Rating</p>
                    <input className={"input-info"}/>
                </div>

                <button
                    className={"bg-accent-primary rounded-md font-bold px-2 p-1 w-max"}>
                    Add movie
                </button>
            </form>
        </div>
    );
};

export default AddMovie;