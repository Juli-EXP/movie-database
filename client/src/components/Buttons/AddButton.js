import React from "react";
import {Link} from "react-router-dom";


const AddButton = ({className, name, path}) => {
    return (
        <Link to={path} className={`bg-accent-primary rounded-md ${className}`}>
            <p style={{color: "black"}} className={"font-bold mx-2 m-1"}>{name}</p>
        </Link>
    );
};

export default AddButton;