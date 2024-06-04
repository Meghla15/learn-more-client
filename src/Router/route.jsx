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
    loader:({params}) =>fetch (`${import.meta.env.VITE_API_URL}/studySession/${params.id}`)
   },
   {
    path : '/paymentPage/:id',
    element : <PaymentPage></PaymentPage>,
    loader:({params}) =>fetch (`${import.meta.env.VITE_API_URL}/studySession/${params.id}`)
   }]},
   {
    path : 'dashboard',
    element : <DashBoard></DashBoard>,
    children : [
        {
          path: 'bookedSession',
          element : <ViewBooked></ViewBooked>,
          loader:() =>fetch (`${import.meta.env.VITE_API_URL}/studySessions`),
         
        },
        {
          path : 'createNote',
          element : <CreateNote></CreateNote>
        },
        {
          path : 'managePersonalNote',
          element : <ManagePersonalNote></ManagePersonalNote>
        },
        {
          path : 'ViewAllMaterials',
          element : <ViewAllMaterials></ViewAllMaterials>
        },
    ]

   },
{ path: '/login', element: <Login /> },
{ path: '/sign-up', element: <SignUp /> },])


//   {
//     path: 'dashboard',
//     element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
//     children: [
//       // normal user routes
//       {
//         path: 'userHome',
//         element: <UserHome></UserHome>
//       },
//       {
//         path: 'cart',
//         element: <Cart></Cart>
//       },
//       {
//         path: 'payment',
//         element: <Payment></Payment>
//       },
//       {
//         path: 'paymentHistory',
//         element: <PaymentHistory></PaymentHistory>
//       },

//       // admin only routes
//       {
//         path: 'adminHome',
//         element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
//       },
//       {
//         path: 'addItems',
//         element: <AdminRoute><AddItems></AddItems></AdminRoute>
//       },
//       {
//         path: 'manageItems',
//         element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
//       },
//       {
//         path: 'updateItem/:id',
//         element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
//         loader: ({params}) => fetch(`https://bistro-boss-server-seven-sage.vercel.app/menu/${params.id}`)
//       },
//       {
//         path: 'users',
//         element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
//       }

//     ]
//   }
export default route;