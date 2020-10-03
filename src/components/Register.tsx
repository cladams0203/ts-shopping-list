import React, { useState } from "react";

interface formValues {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
};

export const Register: React.FC = () => {
  const [form, setForm] = useState<formValues>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);
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
