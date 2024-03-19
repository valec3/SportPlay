import { Navigate, createBrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoutes />,
        children: [
            { index: true, element: <Navigate to="/home" /> },
            { path: '/home', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/forgot-password', element: <ForgotPassword /> },
            { path: '/reset-password', element: <ResetPassword /> },
        ],
    },
    {
        path: '/app',
        element: <PrivateRoutes />,
        children: [
            { index: true, element: <Navigate to="/app/TorneosAbiertos" /> },
            { path: '/TorneosAbiertos', element: <TorneosAbiertos /> },
            { path: '/ResultadosTorneos', element: <ResultadosTorneos /> },
            { path: '/DetalleTorneoAbierto/:id', element: <DetalleTorneoAbierto /> },
            { path: '/Partidos', element: <Partidos /> },
            { path: '/Equipos', element: <Equipos /> },
            { path: '/administrar-equipos', element: <AdministrarEquipos /> },
            { path: '/Perfil', element: <Perfil /> },
            { path: '/Modals', element: <Modals /> },
            { path: '/Activity', element: <Activity /> },
            { path: '/administrar-torneo', element: <AdminTorneo /> },
            { path: '/crear-torneo', element: <CrearTorneo /> },
            { path: '/addPlayer/:id', element: <Addplayer /> },
            { path: '/Admin-Resultados', element: <AdminResult /> },
            { path: '/cargar-resultados/:id', element: <LoadResults /> },
            { path: '/OrganizeGames/:id', element: <OrganizeGames /> },
        ],
    },
    {
        path: '*',
        element: <Navigate to="/404" />,
    },
    {
        path: '/404',
        element: <NotFound />,
    },
]);
