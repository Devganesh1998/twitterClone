import React from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { connect } from "react-redux";
import NewsFeed from "../Pages/NewsFeed";
import Profile from "../Pages/Profile";


const HomeRouter = ({ isAuthenticated }) => {
  return (
    <React.Fragment>
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          isAuthenticated={isAuthenticated}
          component={NewsFeed}
        />
        <ProtectedRoute
          path="/profile"
          isAuthenticated={isAuthenticated}
          component={Profile}
        />
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

export default connect(mapStateToProps)(HomeRouter);
