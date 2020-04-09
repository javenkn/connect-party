import React from "react";
import { useByeQuery } from "../generated/graphql";

interface ByeProps {}

const Bye: React.FC<ByeProps> = () => {
  const { data, loading, error } = useByeQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return <div>{data.bye}</div>;
};

export default Bye;
