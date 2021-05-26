import React from "react";
import {Link} from "react-router-dom";


class LinkButton extends React.Component<{ className?: string, name: string, path: string }> {
    render() {
        let {className, name, path} = this.props;

        return (
            <Link to={path} className={`add-button ${className}`}>
                <p style={{color: "black"}}>{name}</p>
            </Link>
        );
    }
}

export default LinkButton;