import React from "react";
import "./homepage.scss";
import Diary from "./diary.png";
import { useNavigate } from "react-router-dom";

const Homepage=()=>{
    const navigate=useNavigate();
    return(
        <div className="homepage" style={{backgroundImage:`url(${Diary})`}}>
        <div className="heading">
        <h1>DIARY</h1>
        </div>
        <div className="buttons">
        <button className="bu" onClick={()=>navigate('/savedpage')}>PAGES</button>
        <button className="bu" onClick={()=>navigate('/diarypage')}>ADD</button>
        </div>
        </div>
    );
};
export default Homepage;