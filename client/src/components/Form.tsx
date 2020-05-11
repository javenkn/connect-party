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
    <form
      className="flex flex-col p-4 w-1/4 mx-auto rounded-md shadow-lg"
      onSubmit={(e) => onSubmit(e, email, password)}
    >
      <input
        className="p-2 mb-4 bg-gray-100"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="p-2 mb-4 bg-gray-100"
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="px-4 py-1 rounded bg-purple-500 text-white inline-block mx-auto hover:bg-purple-600"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
