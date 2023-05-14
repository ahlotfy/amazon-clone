import { Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../Context/GlobalState";
const NotRequireUser = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/error" />;
  }
  return children;
};

export default NotRequireUser;
