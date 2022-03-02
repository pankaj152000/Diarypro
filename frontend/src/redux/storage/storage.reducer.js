import storageActionTypes from "./storage.types";

const STORAGE_INITIAL_STATE={
    Data:[]
}

const storageReducer =(state = STORAGE_INITIAL_STATE,action)=>{
    console.log(action.payload)
  switch(action.type){
      case storageActionTypes.ADD_DATA: 
      return{
          ...state,
          Data:[...state.Data,action.payload],
      };
      
      default :
      return{
          ...state
      };


  }
}
export default storageReducer;