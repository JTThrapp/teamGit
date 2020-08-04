import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';

let baseURL = "https://api.openweathermap.org/data/2.5/weather";
let key = "80c6adf1daf8b1ce210061d084c2ae9f"


const Weather = (props) => {

    let url = `${baseURL}?lon=${props.longitude}&lat=${props.latitude}&appid=${key}`

    const [temp, setTemp] = useState(0);
    const [tempType, setTempType] = useState('Celsius');

    fetch(url)
        .then(res => res.json())
        .then(json => setTemp(json.main.temp - 273.15))
        .catch(err => console.log(err));
    
    // let tempC = temp - 273.15;
    let tempF = (temp * 9 / 5 ) + 32 

    let toggleTemp = (event) => {
        if( temp = 'Celsius'){
            setTemp(tempF);
            setTempType('Fahrenheit')
    }
}
    return(
        <div>
            <h5>Current Temperature based on your location:</h5>
            <p>{temp} degrees {tempType} </p>
            <Button color="secondary" onClick={(e) => toggleTemp(e)}>Switch Fahrenheit/Celsius</Button>
            {/* <button onClick={(e) => displayC(e)}>See Celsius</button> */}
        </div>
    )

}

export default Weather;