type Actions =
  | { type: "LOADING" }
  | { type: "ERROR"; payload: string }
  | {
      type: "SET_USER";
      payload: {
        username: string;
        email: string;
        id: number;
      };
    };

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
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
