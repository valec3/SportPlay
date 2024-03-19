import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

export const PrivateRoutes = () => {
    const [token, setToken] = useState('');
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);
    return token ? <Outlet /> : <Navigate to="/login" />;
};
