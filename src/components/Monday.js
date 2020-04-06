import React from 'react';
import {useLocation, useParams} from "react-router-dom";
function Monday() {
    var params = new URLSearchParams(useLocation().search);
    var date = params.get("date");
return <p>Monday {date}</p>;
  }

export default Monday;