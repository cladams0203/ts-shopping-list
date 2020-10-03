interface List {
  name: string;
  id: number;
  purchased: boolean;
}

interface State {
  list: List[];
}
type Actions =
  | { type: "ADD_ITEM"; payload: List }
  | { type: "PURCHASED"; payload: number }
  | { type: "REMOVE_PURCHASED" };

const initialState: State = {
  list: [
    {
      name: "",
      id: 0,
      purchased: false,
    },
  ],
};

export const listReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "PURCHASED":
      return {
        ...state,
        list: state.list.map(
          (item): List => {
            if (item.id === action.payload) {
              return { ...item, purchased: true };
            } else {
              return item;
            }
          }
        ),
      };
    case "REMOVE_PURCHASED":
      return {
        list: state.list.filter((item): boolean => !item.purchased),
      };
    default:
      return state;
  }
};
