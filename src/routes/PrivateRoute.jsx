import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const { signed } = useAuth();
  // determine if authorized, from context or however you're doing it
  // If signed, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return signed ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
