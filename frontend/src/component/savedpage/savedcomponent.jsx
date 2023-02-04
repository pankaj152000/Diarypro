import React from "react";
import "./savedcomponent.scss";

const savedComponent=({date,text,head})=>{
    return(
        <div className="savedComponent">
        <div className="container">
        <div className="box">
        <h3 className="po">{date}</h3>
        <span className="po"><b>{head}</b></span><br/>
        <span className="po">{text}</span>
        </div>
        </div>

          
        </div>
    );
};

export default savedComponent;