import React, {useEffect} from 'react';
let baseURL = "https://api.nasa.gov/planetary/earth/imagery";
let key = "H5q2Qk9FzLtXcAPndcbHxZEGdznAmyMafbOAwVR6";
let date = "2017-02-01";
// let longitude = "-86";
// let latitude = "40";

const Nasa = (props) => {

    let url = `${baseURL}?lon=${props.longitude}&lat=${props.latitude}&date=${date}&api_key=${key}`;
    console.log(url);
    // useEffect(()=>{
    // console.log(url);
    // fetch(url)
    //     .then(res => console.log(res.body))
    //     // .then(json => console.log(json))
    //     .catch(err => console.log(err))
    // })

    return(
        <div>
            <h5>Satellite Image based on your location:</h5>
            <img style={{width: "250px"}} src={url}/>
        </div>
    )
}

export default Nasa;