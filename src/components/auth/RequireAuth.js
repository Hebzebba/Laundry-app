import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const authStatus = useSelector((state) => state.auth);

  if (authStatus || localStorage.getItem("loginStat")) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default RequireAuth;
