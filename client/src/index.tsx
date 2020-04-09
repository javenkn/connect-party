import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Routes from "./Routes";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
