import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import Cloudy from '../images/cloudy.png';
function Monday() {
    let params = new URLSearchParams(useLocation().search);
    let date = params.get("date");
    let description = params.get("description");
    let current = params.get("current");
    let min = params.get("min");
return (
    <div>
        <p>Monday</p>
        <p>{date}</p>
        <p>{description}</p>
        <p>{current}</p>
        <p>{min}</p>
    </div>

);
  }

export default Monday;