import { combineReducers } from "redux";
import { listReducer } from "./listReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  list: listReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
