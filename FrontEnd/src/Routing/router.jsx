import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthPage from "../Pages/AuthPage";

const Router = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" render={() => <h3>Home</h3>} />
        <Route path="/auth" component={AuthPage} />
        <Route render={() => <h3>404 Not Found</h3>} />
      </Switch>
    </React.Fragment>
  );
};

export default Router;
