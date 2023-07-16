import axios from "axios";
import React, { useEffect, useState } from "react";

export function GetAll() {

    const [all, setAll] = useState([]);

    const getAllImages = async () => {
        const resp = await axios.get("http://localhost:5000/getall");
        setAll(resp.data);
    }

    useEffect(() => {

        getAllImages();
    }, [])

    return (<div>
        <h1>Images Page</h1>
        {
            all.map((ele, key) => {
                return (
                    <div key={key}>
                        <p>{"http://localhost:5000/images/"+ele.profileImg}</p>
                        <img src={"http://localhost:5000/images/"+ele.profileImg}></img> 
                    </div>
                )
            })
        }
    </div>)
}