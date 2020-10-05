import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FormValues } from "../utils/types";

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
};

export const Register: React.FC = () => {
  const [form, setForm] = useState<FormValues>(initialValues);
  const state = useSelector((state) => state);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(state);
  return (
    <>
      <form>
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
