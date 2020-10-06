import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState, ListItem } from "../utils/types";
import { ShoppingListItem } from "./ShoppingListItem";
import { AddItemForm } from "./AddItemForm";
import '../styles/ListContainer.scss'
interface totalFun {
  totally: () => void;
}

export const ListContainer: React.FC = () => {
  const [total, setTotal] = useState(0);
  const { user } = useSelector((state: AppState) => state.user);
  const { list } = useSelector((state: AppState) => state.list);
  console.log(list);

  const handleTotal = (input: number) => {
    setTotal(total + input);
  };

  return (
    <div className="list-container">
      <h1>{user.username}'s Shopping List</h1>
      <h2>Total: {total}</h2>
      <AddItemForm handleTotal={handleTotal} />
      {list.map((item: ListItem) => {
        return <ShoppingListItem item={item} key={item.id} />;
      })}
    </div>
  );
};
