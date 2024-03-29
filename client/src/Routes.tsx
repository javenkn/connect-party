import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";

function Routes() {
  return (
    <BrowserRouter>
      <Navigation />
      <main className="p-6 h-full">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default Routes;
