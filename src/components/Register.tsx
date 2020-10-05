import React, { useState, Dispatch } from "react";
import { useDispatch } from "react-redux";
import { FormValues } from "../utils/types";
import { User, Actions } from "../utils/types";
import { SET_USER } from "../reducers/userReducer";

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
};

export const Register: React.FC = () => {
  const [form, setForm] = useState<FormValues>(initialValues);
  const dispatch = useDispatch<Dispatch<Actions>>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser: User = {
      username: form.username,
      email: form.email,
      id: Date.now(),
    };
    dispatch({ type: SET_USER, payload: newUser });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Confirm Password:{" "}
          <input
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:{" "}
          <input name="email" value={form.email} onChange={handleChange} />
        </label>
      </form>
    </>
  );
};
