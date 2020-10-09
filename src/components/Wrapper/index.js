import React, { Children } from "react";
import "./Wrapper.css";

function Wrapper({Children}) {
    return(
        <div className="wrapper" >{ Children}</div>
    );
}

export default Wrapper;
