import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { setAccessToken } from "../accessToken";

const Navigation: React.FC = () => {
  const { data, loading } = useMeQuery();
  const [logout, { client }] = useLogoutMutation();
  const history = useHistory();

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
          {!loading && data && data.me && (
            <li>
              <button
                onClick={async () => {
                  await logout();
                  setAccessToken("");
                  await client!.resetStore();
                  history.push("/");
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
      {body}
    </header>
  );
};

export default Navigation;
