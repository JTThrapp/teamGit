import React from 'react';
let baseURL = "https://api.openweathermap.org/data/2.5/weather";
let key = "80c6adf1daf8b1ce210061d084c2ae9f"


const Weather = (props) => {

    let url = `${baseURL}?lon=${props.longitude}&lat=${props.latitude}&api_key=${key}`
    console.log(url)

    // fetch(url)
    //     .then(res => res.json())
    //     .then(json => console.log(json))
    //     .catch(err => console.log(err));
    
    return(
        <div>
            <p>yoyoyo its the weather man</p>
        </div>
    )

}

export default Weather;