import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/context/authContext';

export const PublicRoute = ({children}) => {
    const { isAuthenticated } = useAuth();

    return (!isAuthenticated)
    ? children
    : <Navigate to="/" />
}
