import React from "react";
import {IconProperty} from "../model/IconProperty";
import {AiFillHome} from "react-icons/ai";
import {IconContext} from "react-icons";


const Home = (props: IconProperty) => {
    const {className, size} = props;

    return (
        <div className={` ${className}`}>
            <IconContext.Provider value={{
                color: "white",
                size: size?.toString()
            }}>
                <AiFillHome/>
            </IconContext.Provider>
        </div>
    );

}

export default Home;