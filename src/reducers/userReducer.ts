import { UserState, Actions, User } from "../utils/types";

export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const SET_USER = "SET_USER";

const initialUser: User = {
  username: "",
  id: 0,
  email: "",
};

const initialState: UserState = {
  user: initialUser,
  error: "",
  loading: false,
};

export const userReducer = (
  state = initialState,
  action: Actions
): UserState => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
