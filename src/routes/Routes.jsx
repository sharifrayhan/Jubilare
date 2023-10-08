import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import Rootpage from "../pages/Rootpage.jsx";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpcomingEvents from "../pages/UpcomingEvents";
import Pricing from "../pages/Pricing";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";


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
        loader: () => fetch(`/services.json`),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/Upcoming-events",
        element: <UpcomingEvents></UpcomingEvents>,
      },
      {
        path: "/Pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/About-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/Contact-us",
        element: <ContactUs></ContactUs>,
      }
    ],
  },
]);

export default router;
