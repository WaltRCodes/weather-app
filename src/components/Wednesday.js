import React from 'react';
import cloudy from './images/cloudy.png';
import rainy from './images/rainy.png';
import sunny from './images/sunny.png';
import snowy from './images/snowy.png';
import {useLocation} from "react-router-dom";

function Wednesday() {
    let params = new URLSearchParams(useLocation().search);
    let date = params.get("date");
    let description = params.get("description");
    let current = params.get("current");
    let min = params.get("min");
return (
    <div>
        <p>Wednesday</p>
    </div>

);
  }

export default Wednesday;