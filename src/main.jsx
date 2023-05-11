import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routes";
import AuthProvider from "./pages/Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-auto max-w-7xl mt-10">
    <React.StrictMode>
    <AuthProvider>      
        <RouterProvider router={router} />      
    </AuthProvider>
    </React.StrictMode>,
  </div>
);
