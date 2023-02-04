import React from "react";
import { useNavigate } from "react-router-dom";
import "./savedbutton.scss";


const Savedbutton = () => {
    const navigate = useNavigate();
  return (
    <div>
      <button className="bu" onClick={()=>navigate('/savedpage')}>
        SAVED PAGES
      </button>
    </div>
  );
};
export default Savedbutton;
