export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const SET_USER = "SET_USER";

interface User {
  username: string;
  email: string;
  id: number;
}

type Actions =
  | { type: typeof LOADING }
  | { type: typeof ERROR; payload: string }
  | { type: typeof SET_USER; payload: User };

interface State {
  user: {};
  error: string;
  loading: boolean;
}
const initialState: State = {
  user: {},
  error: "",
  loading: false,
};

export const userReducer = (state = initialState, action: Actions): State => {
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
