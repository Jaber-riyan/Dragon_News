import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import MainContent from "../Components/MainComponents/MainContent";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: '/category/:category_id',
                element: <MainContent></MainContent>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.category_id}`)
            }
        ]
    },
    {
        path: 'news',
        element : <h2>This is the news path</h2>
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '*',
        element: <h3>Error</h3>
    },
])

export default router;