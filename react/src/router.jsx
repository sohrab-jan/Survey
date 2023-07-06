import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";
import Surveys from "./views/Surveys.jsx";
import Login from "./views/Login.jsx";
import SignUp from "./views/SignUp.jsx";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import SurveysView from "./views/SurveysView.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="/" />,
            },
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/surveys",
                element: <Surveys />,
            },
            {
                path: "/surveys/create",
                element: <SurveysView/>,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },
]);

export default router;
