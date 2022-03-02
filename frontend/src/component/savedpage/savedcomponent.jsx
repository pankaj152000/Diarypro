import React from "react";

const savedComponent=({date,text,head})=>{
    return(
        <div className="savedComponent">
        <h3>{date}</h3>
        <h2>{head}</h2>
        <span>{text}</span>    
        </div>
    );
};

export default savedComponent;