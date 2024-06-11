import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
import DashBoard from "../Pages/DashBoard/DashBoard";
import PrivateRoute from "../Router/PrivetRoute/PrivetRoute";
import DetailsPage from "../Pages/StudySessionPage/DetailsPage";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import ViewBooked from "../Pages/DashBoard/Student/ViewBooked";
import CreateNote from "../Pages/DashBoard/Student/CreateNote";
import ManagePersonalNote from "../Pages/DashBoard/Student/ManagePersonalNote";
import ViewAllMaterials from "../Pages/DashBoard/Student/ViewAllMaterials";
import ViewAllUsers from "../Pages/DashBoard/Admin/ViewAllUsers";
import ViewAllStudySession from "../Pages/DashBoard/Admin/ViewAllStudySession";
import CreateStudySession from "../Pages/DashBoard/Tutor/CreateStudySession";
import UploadMaterials from "../Pages/DashBoard/Tutor/UploadMaterials";
import Update from "../Pages/DashBoard/Student/Update";
import ViewAllSession from "../Pages/DashBoard/Tutor/ViewAllSession";
import Profile from "../Pages/DashBoard/Profile";
import PrivetRoute from "../Router/PrivetRoute/PrivetRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
const route = createBrowserRouter([{
    path:'/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children :[
    {
      path: '/',
      element :<Home></Home>,
      loader:() =>fetch (`${import.meta.env.VITE_API_URL}/studySessions`)
    },
   {
    path: '/detailsPage/:id',
    element :<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
    loader:({params}) =>fetch (`${import.meta.env.VITE_API_URL}/studySession/${params.id}`),
    
   },
   {
    path : '/paymentPage/:id',
    element : <PrivetRoute><PaymentPage></PaymentPage></PrivetRoute>,
    loader:({params}) =>fetch (`${import.meta.env.VITE_API_URL}/studySession/${params.id}`)
   }]},
   {
    path : '/dashboard',
    element : <DashBoard></DashBoard>,
    children : [
      {
        path : '/dashboard',
        element : <PrivetRoute><ViewAllMaterials></ViewAllMaterials></PrivetRoute>
      },
       
        {
          path : 'createNote',
          element : <PrivetRoute><CreateNote></CreateNote></PrivetRoute>
        },
        {
          path : 'update/:id',
          element : <PrivetRoute><Update></Update></PrivetRoute>,
          loader:({params}) =>fetch (`${import.meta.env.VITE_API_URL}/storeNote/${params.id}`)
        },
        {
          path : 'managePersonalNote',
          element : <PrivetRoute><ManagePersonalNote></ManagePersonalNote></PrivetRoute>,
          loader:() =>fetch (`${import.meta.env.VITE_API_URL}/storeNotes`),
        },
        {
          path: 'bookedSession',
          element : <PrivetRoute><ViewBooked></ViewBooked></PrivetRoute>,
          loader:() =>fetch (`${import.meta.env.VITE_API_URL}/studySessions`),
         
        },
        {
          path: 'profile',
          element:<PrivetRoute><Profile></Profile></PrivetRoute>
        },
        
        // Admin Route
        {
          path : 'ViewAllUsers',
          element : <AdminRoute><ViewAllUsers></ViewAllUsers></AdminRoute>, 
          loader:() =>fetch (`${import.meta.env.VITE_API_URL}/users`),
        },
        {
          path : 'viewAllStudySession',
          element : <AdminRoute><ViewAllStudySession></ViewAllStudySession></AdminRoute>,
          loader:() =>fetch (`${import.meta.env.VITE_API_URL}/studySessions`),
        },
        // tutor route
        {
          path : 'CreateStudySession',
          element : <PrivetRoute><CreateStudySession></CreateStudySession></PrivetRoute>
        },
        {
          path : 'ViewAllSession',
          element : <PrivetRoute><ViewAllSession></ViewAllSession></PrivetRoute>,
        },
        {
          path : 'uploadMaterials',
          element : <PrivetRoute><UploadMaterials></UploadMaterials></PrivetRoute>,
          loader:() =>fetch (`${import.meta.env.VITE_API_URL}/materials`),
          
          // loader:() =>fetch (`${import.meta.env.VITE_API_URL}/studySessions`)
        },

    ]

   },
{ path: '/login', element: <Login /> },
{ path: '/sign-up', element: <SignUp /> },])

export default route;