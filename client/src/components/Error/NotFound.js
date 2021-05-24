import React from "react";


const NotFound = () => {
    return (
        <div className={"flex place-content-center"}>
            <div className={"mt-16 felx"}>
                <h1 className={"text-white text-4xl font-bold"}>404 page not found</h1>
                <p>The page you are looking for doesn't exist</p>
                <a href="/" className={"text-white underline"}>Go to the homepage</a>
            </div>
        </div>
    );
};

export default NotFound;