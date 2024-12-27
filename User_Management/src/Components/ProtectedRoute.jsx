import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';


const ProtectedRoute= () => {
    const { user } = useAuth()

    const isAuthenticated = !!user; 

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />; 
};

export default ProtectedRoute;
