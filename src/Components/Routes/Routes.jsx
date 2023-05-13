import { createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import CheckOut from "../../pages/CheckOut/CheckOut";
import BookingCard from "../../pages/BookingCard/BookingCard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'logout',
            element: <SignUp></SignUp>
        },
        {
            path: 'checkout/:id',
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({params})=> fetch(`https://car-doctor-server-orpin-sigma.vercel.app/services/${params.id}`)
        },
        {
          path: 'bookingCard',
          element: <PrivateRoute><BookingCard></BookingCard></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;