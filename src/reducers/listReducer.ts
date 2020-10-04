export const ADD_ITEM = "ADD_ITEM";
export const PURCHASED = "PURCHASED";
export const REMOVE_PURCHASED = "REMOVE_PURCHASED";

interface ListItem {
  name: string;
  id: number;
  purchased: boolean;
}

interface State {
  list: ListItem[];
}
type Actions =
  | { type: typeof ADD_ITEM; payload: ListItem }
  | { type: typeof PURCHASED; payload: number }
  | { type: typeof REMOVE_PURCHASED };

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
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case PURCHASED:
      return {
        ...state,
        list: state.list.map(
          (item): ListItem => {
            if (item.id === action.payload) {
              return { ...item, purchased: true };
            } else {
              return item;
            }
          }
        ),
      };
    case REMOVE_PURCHASED:
      return {
        list: state.list.filter((item): boolean => !item.purchased),
      };
    default:
      return state;
  }
};
