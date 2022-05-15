import { combineReducers } from "redux";
import fetchReducer from "./FetchReducer";


export default combineReducers({
    fetch: fetchReducer
})