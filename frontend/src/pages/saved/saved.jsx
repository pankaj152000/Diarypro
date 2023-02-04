import React from "react";
import  "./saved.scss";
import { connect } from "react-redux";
import SavedComponent from "../../component/savedpage/savedcomponent";
const savedPage=({Data})=>{
    console.log(Data);
    return(
    <div className="saved">
    
    {
        Data.map((data)=>(data.map(({date,head,text})=><SavedComponent date={date} head={head} text={text}/>)))
    }
    </div>
    );
}
const mapStateToProps=(state)=>({
   Data: state.storage.Data
});
export default connect(mapStateToProps)(savedPage);