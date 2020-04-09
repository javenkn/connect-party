import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLoginMutation } from "../generated/graphql";
import { setAccessToken } from "../accessToken";

export type LoginProps = {};

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log("Form submitted");
        const response = await login({
          variables: {
            email,
            password,
          },
        });

        if (response && response.data) {
          setAccessToken(response.data.login.accessToken);
        }
        history.push("/");
      }}
    >
      Login
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
