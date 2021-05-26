import React from "react";
import {Link} from "react-router-dom";
import LinkButton from "../shared/LinkButton";
import Home from "../icon/Home";
import Back from "../icon/Back";


class Navbar extends React.Component<{ buttonName?: string, buttonPath?: string, backPath?: string }> {
    render() {
        let {buttonName, buttonPath, backPath} = this.props;

        return (
            <div className={"bg-foreground flex justify-between"}>
                <div className={"flex"}>
                    <Link to={"/"}>
                        <Home size={32} className={"ml-2 m-1"}/>
                    </Link>
                    {backPath ? (
                        <Link to={backPath}>
                            <Back size={32} className={"ml-2 m-1"}/>
                        </Link>
                    ) : null}
                </div>

                {buttonName && buttonPath ? (
                    <LinkButton name={buttonName} path={buttonPath} className={"mr-2 m-1"}/>
                ) : null}
            </div>
        );
    }
}

export default Navbar;