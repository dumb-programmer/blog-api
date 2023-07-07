import { useLocation, Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const RequireAuth = ({ children }) => {
  let { user } = useAuthContext();
  let location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
