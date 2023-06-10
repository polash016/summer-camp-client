import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../Login/Login/Login";
import Registration from "../Login/Registration/Registration";
import AllClasses from "../pages/AllClasses/AllClasses";
import PrivateRoute from "./PrivateRoute";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses/MySelectedClasses";
import DashBoard from "../Layout/DashBoard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allClasses",
        element: <AllClasses></AllClasses>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: "bookedClasses",
        element: <MySelectedClasses></MySelectedClasses>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      }
    ],
  },
]);
