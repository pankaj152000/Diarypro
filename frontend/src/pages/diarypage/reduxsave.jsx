import React from "react";
import { connect } from "react-redux";
import addData from "../../redux/storage/storage.action";
const Rsaved=({addata,data})=>{
  console.log(data)
    return(
    <div>
    <button onClick={()=>addata(data)}>REDUX</button>
    </div>
    );
};
const mapDispatchToProps=dispatch=>({
    addata: (data)=>dispatch(addData(data))
  });
export default connect(null,mapDispatchToProps)(Rsaved);