import React from "react";
import { useSelector } from "react-redux";
import { AppState, ListItem } from "../utils/types";
import { ShoppingListItem } from "./ShoppingListItem";
import { AddItemForm } from "./AddItemForm";

export const ListContainer: React.FC = () => {
  const { user } = useSelector((state: AppState) => state.user);
  const { list } = useSelector((state: AppState) => state.list);
  console.log(list);

  return (
    <>
      <div>
        <h1>{user.username}'s Shopping List</h1>
        <AddItemForm />
        {list.map((item: ListItem) => {
          return <ShoppingListItem item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};
