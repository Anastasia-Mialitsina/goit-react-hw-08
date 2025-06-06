//src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, redirectTo = "/" }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

//const isRefreshing = useSelector((state) => state.auth.isRefreshing);
//if (isRefreshing) return null;

export default PrivateRoute;

