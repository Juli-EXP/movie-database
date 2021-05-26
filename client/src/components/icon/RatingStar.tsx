import React from "react";
import {AiFillStar} from "react-icons/ai";
import {IconContext} from "react-icons";


class RatingStar extends React.Component<{ className?: string, size?: number }> {
    render() {
        let {className, size} = this.props;
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
}

export default RatingStar;