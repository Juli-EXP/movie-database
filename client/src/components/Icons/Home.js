import React from "react";
import {AiFillHome} from "react-icons/ai";
import {IconContext} from "react-icons";

const Home = ({className, size}) => {
    return (
        <div className={`${className}`}>
            <IconContext.Provider value={{
                    color: "white",
                    size: size
                }}>
                <AiFillHome/>
            </IconContext.Provider>
        </div>
    );
};

export default Home;