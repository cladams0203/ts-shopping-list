import { LOADING, ERROR, SET_USER } from "../reducers/userReducer";
import { ADD_ITEM, PURCHASED, REMOVE_PURCHASED } from "../reducers/listReducer";

export interface User {
  username: string;
  email: string;
  id: number;
}

export interface ListItem {
  name: string;
  id: number;
  purchased: boolean;
}

export interface UserState {
  user: User;
  error: string;
  loading: boolean;
}

export interface ListState {
  list: ListItem[];
}

export interface AppState {
  list: ListState;
  user: UserState;
}

export type Actions =
  | { type: typeof LOADING }
  | { type: typeof ERROR; payload: string }
  | { type: typeof SET_USER; payload: User }
  | { type: typeof ADD_ITEM; payload: ListItem }
  | { type: typeof PURCHASED; payload: number }
  | { type: typeof REMOVE_PURCHASED };

export interface FormValues {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}
