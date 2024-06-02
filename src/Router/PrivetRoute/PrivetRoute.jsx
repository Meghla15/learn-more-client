import { Navigate, useLocation } from "react-router";
import UseAuth from "../../Hooks/UseAuth";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";


const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();

    if(loading){
        <LoadingSpinner></LoadingSpinner>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;