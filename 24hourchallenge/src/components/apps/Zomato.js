import React from 'react';
let baseURL = "https://developers.zomato.com/api/v2.1/geocode";
let key = "87c91dd67dd11ace0c72b59972fd41e9";


const Zomato = (props) => {

    let url = `${baseURL}?lat=${latitude}&lon=${longitude}&api_key=${key}`

    fetch()

}

export default Zomato;