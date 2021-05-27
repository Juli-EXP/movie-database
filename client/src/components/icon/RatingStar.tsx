import React from "react";
import {IconProperty} from "../model/IconProperty";
import {AiFillStar} from "react-icons/ai";
import {IconContext} from "react-icons";


const RatingStar = (props: IconProperty) => {
    const {className, size} = props;

    return (
        <div className={` ${className}`}>
            <IconContext.Provider value={{
                color: "yellow",
                size: size?.toString()
            }}>
                <AiFillStar/>
            </IconContext.Provider>
        </div>
    );
}

export default RatingStar;