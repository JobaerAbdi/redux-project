import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Login from "../page/Login";
import NotFound from "../page/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '*',
        element: <NotFound/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
])

export default router;
