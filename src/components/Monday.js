import React from 'react';
import {useLocation, useParams} from "react-router-dom";
function Monday() {
    var params = new URLSearchParams(useLocation().search);
    var date = params.get("date");
return (
    <div>
        <p>Monday</p>
        <p>{date}</p>
    </div>

);
  }

export default Monday;