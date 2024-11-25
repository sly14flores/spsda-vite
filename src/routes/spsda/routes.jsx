import { lazy } from 'react';
import Loadable from '@/routes/Loadable';

// import RenderOutlet from '@/spsda/pages/outlet-renderer';
import { GuestGuard, AuthGuard } from '@/spsda/components/auth';
import LayoutV1 from '@/spsda/layouts/layout-1';
const Login = Loadable(lazy(() => import('@/spsda/pages/login')));
const ForgetPassword = Loadable(lazy(() => import('@/spsda/pages/forgot-password')));
const Dashboard = Loadable(lazy(() => import('@/spsda/pages/dashboard')));

const ActiveLayout = () => {
    return <LayoutV1 />;
};

const approutes = [
    {
        element: <GuestGuard />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'forgot-password',
                element: <ForgetPassword />
            },                  
        ]
    },
    {
        element: <AuthGuard><ActiveLayout /></AuthGuard>,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            }
        ]       
    }
]

export default approutes