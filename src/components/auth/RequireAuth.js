import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const authStatus = useSelector((state) => state.auth);

  if (authStatus) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default RequireAuth;
