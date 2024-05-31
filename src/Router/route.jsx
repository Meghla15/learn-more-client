import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
const route = createBrowserRouter([{
    path:'/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children :[
    {
      path: '/',
      element :<Home></Home>
    },
   
]},
{ path: '/login', element: <Login /> },
{ path: '/sign-up', element: <SignUp /> },])
export default route;