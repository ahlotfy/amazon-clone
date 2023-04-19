import { Navigate } from "react-router-dom";
import { useAuth } from "./Context/GlobalState";
const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/*" />;
  }
  return children;
};

export default RequireAuth;
