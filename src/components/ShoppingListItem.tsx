import React from "react";
import { ItemProps } from "../utils/types";

export const ShoppingListItem: React.FC<ItemProps> = ({ item }) => {
  const { name, purchased, price } = item;
  return (
    <div>
      <h2>
        {name} <span>Price: {price}</span>
      </h2>
    </div>
  );
};
