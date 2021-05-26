import React from "react";
import {AiFillHome} from "react-icons/ai";
import {IconContext} from "react-icons";


class Home extends React.Component<{ className?: string, size?: number }> {
    render() {
        let {className, size} = this.props;

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
}

export default Home;