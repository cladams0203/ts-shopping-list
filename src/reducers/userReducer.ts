import { UserState, Actions } from "../utils/types";

export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const SET_USER = "SET_USER";

const initialState: UserState = {
  user: {},
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
