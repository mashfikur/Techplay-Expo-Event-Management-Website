import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/Home/ServiceDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        element: <ServiceDetails></ServiceDetails>,
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
    ],
  },
]);

export default router;
