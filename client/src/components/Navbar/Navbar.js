import React from "react";
import HomeButton from "../Icons/HomeButton";
import {Link} from "react-router-dom";
import AddButton from "../AddButton";


const Navbar = () => {
    return (
        <div className={"bg-foreground flex justify-between"}>
            <Link to={"/"}>
                <HomeButton size={32} className={"ml-2 m-1"}/>
            </Link>

            <AddButton name={"Add movie"} size={32} className={"mr-2 m-1"}/>
        </div>
    );
};

export default Navbar;