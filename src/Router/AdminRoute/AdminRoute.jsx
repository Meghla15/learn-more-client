import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import UseAuth from "../../Hooks/UseAuth";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner"

const AdminRoute = (children) => {
  const [user, loading] = UseAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
