import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/Authentication';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex items-center justify-center mt-10 min-h-screen'>
            <span className="loading loading-spinner text-info w-24 h-24"></span>
        </div>;
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;