import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logout } = UseAuth();

   
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
       if(token){
        config.headers.authorization = `Bearer ${token}`;
       }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });


    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        

        if (error.response.status === 401 || error.response.status === 403) {
            await logout();
            navigate('/login');
        }
        else {
            console.error("Network or other error:", error);
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;