import { Link, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import Login from '../../Pages/Login/Login';

const PrivetRoute = ({children}) => {
    const {user} = UseAuth()
    const location = useLocation()
    if(!user){
        return <Link state={location.pathname} to={'/login'}> <Login></Login> </Link>
       }
       return(
        <div>
            {children}
        </div>
       )
};

export default PrivetRoute;