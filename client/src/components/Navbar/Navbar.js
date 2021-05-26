import React from "react";
import Home from "../Icons/Home";
import {Link} from "react-router-dom";
import AddButton from "../Shared/AddButton";
import Back from "../Icons/Back";


const Navbar = ({buttonName, path, backPath}) => {
    return (
        <div className={"bg-foreground flex justify-between"}>
            <div className={"flex"}>
                <Link to={"/"}>
                    <Home size={32} className={"ml-2 m-1"}/>
                </Link>
                {backPath ?(
                    <Link to={backPath}>
                        <Back size={32} className={"ml-2 m-1"}/>
                    </Link>
                ) : null}
            </div>

            {buttonName ? (
                <AddButton name={buttonName} path={path} size={32} className={"mr-2 m-1"}/>
            ) : null}
        </div>
    );
};

export default Navbar;