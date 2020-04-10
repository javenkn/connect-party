import React from "react";
import { useRegisterMutation } from "../generated/graphql";
import { RouteComponentProps } from "react-router-dom";
import Form from "../components/Form";

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [register] = useRegisterMutation();

  return (
    <Form
      onSubmit={async (e, email, password) => {
        e.preventDefault();

        await register({
          variables: {
            email,
            password,
          },
        });
        history.push("/");
      }}
      buttonText="Register"
    />
  );
};

export default Register;
