import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useUsersQuery } from "../generated/graphql";

const Home: React.FC<RouteComponentProps> = () => {
  const { data } = useUsersQuery({ fetchPolicy: "network-only" });

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-6xl text-center">Connect Party 🥳</h1>
    </div>
  );
};

export default Home;
