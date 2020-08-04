import React, {useState, useEffect} from 'react';
import Zomatos from './Zomatos'

// import React, {useState} from 'react';
// import Zomatos from './Zomatos';

let baseURL = "https://developers.zomato.com/api/v2.1/geocode";
let key = "ad462c6b8b5e9b2183d1e74dfbbbe087";


// const Zomato = (props) => {

//     const [restaurants, setRestaurants] = useState([]);

   
    

//     fetch(url, {
        // headers: {"user-key": key}
//     })
//         .then(res => res.json())
//         .then(data => setRestaurants([data.nearby_restaurants]))
//         .catch(err => console.log(err))
    
    

//         // data.

//     return(
//         <div>
//             <p>testing zomato component</p>
//             <Zomatos restaurants={restaurants}/>
//         </div>
//     )

// }

// export default Zomato;



const Zomato = (props) => {
    const [restaurants, setRestaurants] = useState([])

    let url = `${baseURL}?lat=${props.latitude}&lon=${props.longitude}&user_key=${key}`
    console.log(url)
    

    useEffect(() => {
        fetch(url, {
            headers: {"user-key": key}
        })
        .then(res => res.json())
        .then(json => setRestaurants(json))
        .catch(err => console.log(err))
    }, []);
    return (
       <div> 
           <h5>Nearby Restaurants based on your location:</h5>
                <Zomatos restaurants={ restaurants }/>
           
        </div>
    )
}
export default Zomato;