import React from 'react';
import {useLocation, useParams} from "react-router-dom";
function Monday() {
    var params = new URLSearchParams(useLocation().search);
    var date = params.get("date");
return (
    <div>
        <p>Monday {date}</p>
    </div>

);
  }

export default Monday;