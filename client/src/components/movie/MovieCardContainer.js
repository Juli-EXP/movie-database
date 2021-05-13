import React, {useEffect, useState} from "react";
import axios from "axios";

const MovieCardContainer = ({setUrl}) => {
    const API_URL = process.env.API_URL || "http://localhost:4000/api";
    const [data, setData] = useState();

    useEffect(() => {
        setUrl("movie");
        axios.get(`${API_URL}/movie`)
            .then((res) => {
                //TODO check if empty
                setData(res.data);
            });
    });

    return (
        <div className="">

        </div>
    );
};

export default MovieCardContainer;