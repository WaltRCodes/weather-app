import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import cloudy from './images/cloudy.png';
import rainy from './images/rainy.png';
import sunny from './images/sunny.png';
import snowy from './images/snowy.png';
function Monday() {
    let params = new URLSearchParams(useLocation().search);
    let date = params.get("date");
    let description = params.get("description");
    let current = params.get("current");
    let min = params.get("min");
    //substring check: https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
    let image = sunny;
    if(description.substring('cloud')){
        image = cloudy;
    } else if (description.substring('rain')){
        image = rainy;
    } else if (description.substring('snow')){
        image = snowy;
    } 
return (
    <div>
        <p>Monday</p>
        <p><img src={image}/></p>
        <p>{current} {min}</p>
    </div>

);
  }

export default Monday;