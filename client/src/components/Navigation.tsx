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
    <header className="p-4 shadow">
      <nav>
        <ul className="flex justify-end">
          <li className="ml-4 border-solid border-x-0 border-b-4 border-transparent hover:border-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-4 border-solid border-x-0 border-b-4 border-transparent hover:border-gray-600">
            <Link to="/register">Register</Link>
          </li>
          <li className="ml-4 border-solid border-x-0 border-b-4 border-transparent hover:border-gray-600">
            <Link to="/login">Login</Link>
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
      {/* {body} */}
    </header>
  );
};

export default Navigation;
