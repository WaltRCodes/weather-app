import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import cloudy from './images/cloudy.png';
function Monday() {
    let params = new URLSearchParams(useLocation().search);
    let date = params.get("date");
    let description = params.get("description");
    let current = params.get("current");
    let min = params.get("min");
    //substring check: https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
    let image = '';
    if(description.substring('cloud')){
        image = cloudy;
    }
return (
    <div>
        <p>Monday</p>
        <p>{date}</p>
        <p><img src={image}/></p>
        <p>{current}</p>
        <p>{min}</p>
    </div>

);
  }

export default Monday;