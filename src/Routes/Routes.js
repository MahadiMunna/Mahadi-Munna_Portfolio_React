import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
    }
])
export default router;
