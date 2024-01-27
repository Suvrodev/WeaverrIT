import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element: <Navigate to='/home'></Navigate>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/contact',
            element:<Contact></Contact>
        }
    ]
  },
]);

export default router;