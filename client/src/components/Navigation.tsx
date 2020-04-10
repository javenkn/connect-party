import React from "react";
import { Link } from "react-router-dom";
import { useMeQuery } from "../generated/graphql";

export type NavigationProps = {};

export const Navigation: React.FC<NavigationProps> = () => {
  const { data, loading } = useMeQuery();
  let body: any = null;

  if (loading) {
    body = null;
  } else if (data && data.me) {
    body = <h1>You are logged in as: {data.me.email}</h1>;
  } else {
    body = <h1>Please log in.</h1>;
  }
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/bye">Bye</Link>
          </li>
        </ul>
      </nav>
      {body}
    </header>
  );
};

export default Navigation;
