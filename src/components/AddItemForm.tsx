import React, { useState, Dispatch } from "react";
import { useDispatch } from "react-redux";
import { Actions, ListFormValue, ListItem } from "../utils/types";
import { ADD_ITEM } from "../reducers/listReducer";

interface Formprops {
  handleTotal: (arg: number) => void;
}

const inititialForm = {
  name: "",
  price: "",
};

export const AddItemForm: React.FC<Formprops> = ({ handleTotal }) => {
  const [form, setForm] = useState<ListFormValue>(inititialForm);
  const dispatch = useDispatch<Dispatch<Actions>>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPrice = Number(form.price);
    const newItem: ListItem = {
      name: form.name,
      id: Date.now(),
      purchased: false,
      price: newPrice,
    };
    dispatch({ type: ADD_ITEM, payload: newItem });
    handleTotal(newPrice);
    setForm(inititialForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Item:{" "}
        <input name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Price: <input name="price" value={form.price} onChange={handleChange} />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
};
