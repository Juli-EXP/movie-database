import React from "react";
import {IconProperty} from "../model/IconProperty";
import {BiArrowBack} from "react-icons/bi";
import {IconContext} from "react-icons";


const Back = (props: IconProperty) => {
    const {className, size} = props

    return (
        <div className={` ${className}`}>
            <IconContext.Provider value={{
                color: "white",
                size: size?.toString()
            }}>
                <BiArrowBack/>
            </IconContext.Provider>
        </div>
    )
}

export default Back;