import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import Rootpage from "../pages/Rootpage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage></Rootpage>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      }
    ],
  },
]);

export default router;
