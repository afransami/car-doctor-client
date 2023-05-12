import { createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import CheckOut from "../../pages/CheckOut/CheckOut";



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
            element: <CheckOut></CheckOut>,
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;