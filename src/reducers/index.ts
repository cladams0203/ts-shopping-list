import { combineReducers } from "redux";
import { listReducer as list } from "./listReducer";
import { userReducer as user } from "./userReducer";

export default combineReducers({ user, list });
