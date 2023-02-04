import React from "react";
import "./homepage.scss";
import Diary from "./diary.png";
import { useNavigate } from "react-router-dom";

const Homepage=()=>{
    const navigate=useNavigate();
//  const handlechange=()=>{    fetch('https://rqjrqo0bef.execute-api.ap-south-1.amazonaws.com/add_to_collections/', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Headers' : "Content-Type",
//             "Access-Control-Allow-Origin": '*',
//             "Access-Control-Allow-Methods": "OPTIONS"
//   },
//   body: JSON.stringify({
//     name: 'Tushar Nautiyal',
//     phone: 919250704650
//   })
// }).then(res=>res.json()).then(res=>console.log(res));
//  }

 const handlechange=()=>{    
  fetch('http://localhost:8080/GetNumber', 
  {headers: {
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      }})
 .then(res=>res.json()).then(res=>console.log(res));
 }




    return(
        <div className="homepage" style={
            {backgroundImage:`url(${Diary})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"
        }}>
        <div className="heading">
        <h1>DIARY</h1>
        </div>
        <div className="buttons">
        <button className="bu" onClick={()=>handlechange()}>PAGES</button>
        <button className="bu" onClick={()=>navigate('/diarypage')}>ADD</button>
        </div>
        </div>
    );
};
export default Homepage;