import React from "react";
import {BiArrowBack} from "react-icons/bi";
import {IconContext} from "react-icons";


class Back extends React.Component<{ className?: string, size?: number }> {
    render() {
        let {className, size} = this.props;

        return (
            <div className={` ${className}`}>
                <IconContext.Provider value={{
                    color: "white",
                    size: size?.toString()
                }}>
                    <BiArrowBack/>
                </IconContext.Provider>
            </div>
        );
    }
}

export default Back;