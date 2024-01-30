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
import About from "../Pages/About/About/About";
import Courses from "../Pages/Courses/Courses";
import Test from "../Pages/Test/Test";
import MySwipper from "../Pages/Test/MySwipper";
import Service from "../Pages/Service/Service";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Login from "../Pages/UserResponsibility/Login/Login";
import Registration from "../Pages/UserResponsibility/Registration/Registration";
import TermAndCondition from "../Pages/UserResponsibility/TermsAndCondition/TermAndCondition";



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
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/service',
          element: <Service></Service>
        },
        {
          path:'/category/:id',
          element: <Courses></Courses>
        },
        {
          path: '/coursedetails/:id',
          element:<CourseDetails></CourseDetails>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        {
          path: '/condition',
          element: <TermAndCondition></TermAndCondition>
        },
        {
          path: '/test',
          element: <Test></Test>
        },
        {
          path: '/ms',
          element: <MySwipper></MySwipper>
        }
    ]
  },
]);

export default router;