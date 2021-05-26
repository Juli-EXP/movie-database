import React from "react";
import {BiArrowBack} from "react-icons/bi";
import {IconContext} from "react-icons";

const Home = ({className, size}) => {
    return (
        <div className={` ${className}`}>
            <IconContext.Provider value={{
                color: "white",
                size: size
            }}>
                <BiArrowBack/>
            </IconContext.Provider>
        </div>
    );
};

export default Home;