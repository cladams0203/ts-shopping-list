import React, { useState, Dispatch } from "react";
import { useDispatch } from "react-redux";
import { Actions, ListItem } from "../utils/types";
import { ADD_ITEM } from "../reducers/listReducer";

type FormValue = string;

export const AddItemForm: React.FC = () => {
  const [form, setForm] = useState<FormValue>("");
  const dispatch = useDispatch<Dispatch<Actions>>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem: ListItem = {
      name: form,
      id: Date.now(),
      purchased: false,
    };
    dispatch({ type: ADD_ITEM, payload: newItem });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={form} onChange={handleChange} />
      <button type="submit">Add Item</button>
    </form>
  );
};
