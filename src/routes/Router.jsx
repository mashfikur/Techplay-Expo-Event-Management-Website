import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/Home/ServiceDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Career from "../pages/Career/Career";
import ManageEvent from "../pages/Mangement/ManageEvent";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service/:ID",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/career",
        element: <PrivateRoute><Career></Career></PrivateRoute>,
      },
      {
        path: "/manage-events",
        element: <PrivateRoute><ManageEvent></ManageEvent></PrivateRoute>,
      },
    ],
  },
]);

export default router;
