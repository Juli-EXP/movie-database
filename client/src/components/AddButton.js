import React from "react";


const AddButton = ({className, name}) => {
    return (
        <div className={`bg-accent-primary rounded-md ${className}`}>
            <p style={{color: "black"}} className={"font-bold mx-2 m-1"}>{name}</p>
        </div>
    );
};

export default AddButton;