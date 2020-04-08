import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useUsersQuery } from "../generated/graphql";

const Home: React.FC<RouteComponentProps> = () => {
  const { data } = useUsersQuery({ fetchPolicy: "network-only" });

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      HOME
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
