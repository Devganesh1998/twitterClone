import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthPage from "../Pages/AuthPage";
import Home from "../Pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import { connect } from "react-redux";
import Profile from "../Pages/Profile";

const Router = ({ isAuthenticated }) => {
  return (
    <React.Fragment>
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          isAuthenticated={isAuthenticated}
          component={Home}
        />
        <ProtectedRoute
          exact
          path="/profile"
          isAuthenticated={isAuthenticated}
          component={Profile}
        />
        <Route path="/auth" component={AuthPage} />
        <Route render={() => <h3>404 Not Found</h3>} />
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Router);
