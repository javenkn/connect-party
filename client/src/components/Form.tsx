import React, { useState } from "react";

interface FormProps {
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => Promise<void>;
  buttonText: string;
}

const Form: React.FC<FormProps> = ({ onSubmit, buttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => onSubmit(e, email, password)}>
      <input
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;
