import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLoginMutation, MeDocument, MeQuery } from "../generated/graphql";
import { setAccessToken } from "../accessToken";
import Form from "../components/Form";

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [login] = useLoginMutation();

  return (
    <Form
      onSubmit={async (e, email, password) => {
        e.preventDefault();

        const response = await login({
          variables: {
            email,
            password,
          },
          update: (store, { data }) => {
            if (!data) {
              return null;
            }
            store.writeQuery<MeQuery>({
              query: MeDocument,
              data: {
                me: data.login.user,
              },
            });
          },
        });

        if (response && response.data) {
          setAccessToken(response.data.login.accessToken);
        }
        history.push("/");
      }}
      buttonText="Login"
    />
  );
};

export default Login;
