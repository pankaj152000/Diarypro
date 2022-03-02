import cartActionsTypes from "./storage.types";

const addData=(data)=>({
    type:cartActionsTypes.ADD_DATA,
    payload:data
});
export default addData;