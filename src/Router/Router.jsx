import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>
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