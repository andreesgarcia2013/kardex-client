import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/context/authContext';
import { KardexPage } from '../kardex/alumno/pages/KardexPage';
import { AdminRoutes } from '../kardex/admin/routes/AdminRoutes';
import { AlumnoRoutes } from '../kardex/alumno/routes/AlumnoRoutes';
import { LoadingPage } from '../kardex/components/LoadingPage';

export const PrivateRoute = ({ children }) => {

    const { isAuthenticated, user, loading } = useAuth();

    if (loading) return(<LoadingPage/>)
    if (!isAuthenticated)return(<Navigate to="/login"/>)

    switch (user.id_rol) {
        case 1:
            return(<AdminRoutes />)
        case 2:
            return(<AlumnoRoutes/>)
    }
  
}

