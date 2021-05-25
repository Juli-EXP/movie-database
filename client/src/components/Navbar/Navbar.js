import React from "react";
import Home from "../Icons/Home";
import {Link} from "react-router-dom";
import AddButton from "../Buttons/AddButton";


const Navbar = ({buttonName, path}) => {
    return (
        <div className={"bg-foreground flex justify-between"}>
            <Link to={"/"}>
                <Home size={32} className={"ml-2 m-1"}/>
            </Link>
            {buttonName ? (
                <AddButton name={buttonName} path={path} size={32} className={"mr-2 m-1"}/>
            ) : null}
        </div>
    );
};

export default Navbar;