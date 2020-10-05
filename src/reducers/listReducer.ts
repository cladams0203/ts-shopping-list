import { ListItem, ListState, Actions } from "../utils/types";

export const ADD_ITEM = "ADD_ITEM";
export const PURCHASED = "PURCHASED";
export const REMOVE_PURCHASED = "REMOVE_PURCHASED";

const initialState: ListState = {
  list: [],
};

export const listReducer = (
  state = initialState,
  action: Actions
): ListState => {
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
