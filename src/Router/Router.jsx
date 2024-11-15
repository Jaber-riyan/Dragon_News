import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import MainContent from "../Components/MainComponents/MainContent";

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
        path: '/news',
        element : <h2>This is the news path</h2>
    },
    {
        path: '/auth',
        element: <h3>This is the auth path</h3>
    },
    {
        path: '*',
        element: <h3>Error</h3>
    },
])

export default router;