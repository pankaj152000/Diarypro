import  {combineReducers}  from "redux";
import storageReducer from "./storage/storage.reducer";

export default combineReducers({
  storage:storageReducer
});
