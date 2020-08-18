import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return isAuthenticated ? <Component {...rest} /> : <Redirect to="/auth" />;
};

export default ProtectedRoute;
