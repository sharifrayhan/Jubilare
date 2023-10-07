import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import Rootpage from "../pages/Rootpage.jsx";
import Details from "../pages/Details";
import Login from "../pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage></Rootpage>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Details/:id",
        element: <Details></Details>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      }
    ],
  },
]);

export default router;
