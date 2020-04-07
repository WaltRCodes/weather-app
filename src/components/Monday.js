import React from 'react';
import {useLocation, useParams} from "react-router-dom";
function Monday() {
    let params = new URLSearchParams(useLocation().search);
    let date = params.get("date");
    let description = params.get("description");
    let current = params.get("current");
return (
    <div>
        <p>Monday</p>
        <p>{date}</p>
        <p>{description}</p>
    </div>

);
  }

export default Monday;