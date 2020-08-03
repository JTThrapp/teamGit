import React, {useEffect} from 'react';
let baseURL = "https://api.nasa.gov/planetary/earth/imagery";
let key = "H5q2Qk9FzLtXcAPndcbHxZEGdznAmyMafbOAwVR6";
let date = "2014-02-01";
let longitude = "-86";
let latitude = "40";

const Nasa = (props) => {

    let url = `${baseURL}?lon=${longitude}&lat=${latitude}&date=${date}&api_key=${key}`;

    useEffect(()=>{
    console.log(url);
    fetch(url)
        .then(res => console.log(res))
        // .then(json => console.log(json))
        .catch(err => console.log(err))
    })
    return(
        <div>
            <p>Hello</p>
        </div>
    )
}

export default Nasa;