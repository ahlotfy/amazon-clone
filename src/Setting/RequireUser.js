// Basic
import React from "react";
import { Navigate } from "react-router-dom";
// Context API
import { useAuth } from "../Context/GlobalState";

const RequireUser = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/signin" replace="false" />;
  }
  return children;
};

export default RequireUser;
