import React from "react";
import {Link} from "react-router-dom";


interface LinkButtonProperty {
    className?: string,
    name: string,
    path: string
}

const LinkButton = (props: LinkButtonProperty) => {
    const {className, name, path} = props;

    return (
        <Link to={path} className={`add-button ${className}`}>
            <p style={{color: "black"}}>{name}</p>
        </Link>
    );

}

export default LinkButton;