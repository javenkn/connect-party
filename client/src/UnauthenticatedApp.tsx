import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

const UnauthenticatedApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default UnauthenticatedApp;
