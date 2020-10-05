import React from "react";
import { ItemProps } from "../utils/types";

export const ShoppingListItem: React.FC<ItemProps> = ({ item }) => {
  const { name, purchased } = item;
  return (
    <>
      <h2>{name}</h2>
    </>
  );
};
