import { combineReducers } from "redux";
import { listReducer } from "./listReducer";
import { userReducer } from "./userReducer";
import { AppState } from "../utils/types";

export const rootReducer = combineReducers<AppState>({
  user: userReducer,
  list: listReducer,
});
