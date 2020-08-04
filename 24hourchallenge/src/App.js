import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Nasa from './components/apps/Nasa';
import Weather from './components/apps/Weather';
import Zomato from './components/apps/Zomato';




function App() {

  const [ longitude, setLongitude ] = useState(0);
  const [ latitude, setLatitude ] = useState(0);


  let getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log( "Geolocation is not supported by this browser.");
    }
  };

  function showPosition(position) {
    document.getElementById("yo").textContent = ( "Latitude: " + position.coords.latitude +
      "  Longitude: " + position.coords.longitude);

      setLatitude(position.coords.latitude);
      console.log(latitude);

      setLongitude(position.coords.longitude);
      console.log(longitude);

  }

  getLocation();

  return (
    <div className="App">
      <h1>24 Hour Challenge</h1>
      <br/>
      <p><b>Your Location:</b></p>
      <span id="yo"></span>
      <br/>
      <hr/>
      <Nasa latitude = {latitude} longitude = {longitude} />
      <hr/>
      <Weather latitude= {latitude} longitude = {longitude} />
      <hr/>
      <Zomato latitude={latitude} longitude = {longitude}/>
    </div>
  );
}

export default App;


