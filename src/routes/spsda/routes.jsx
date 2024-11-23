import { lazy } from 'react';
import Loadable from '@/routes/Loadable';

import { GuestGuard, AuthGuard } from '@/spsda/components/auth';
import LayoutV1 from '@/spsda/layouts/layout-1';
import RenderOutlet from '@/spsda/pages/outlet-renderer';
const Login = Loadable(lazy(() => import('@/spsda/pages/login')));
const Dashboard = Loadable(lazy(() => import('@/spsda/pages/dashboard')));

const ActiveLayout = () => {
    return <LayoutV1 />;
};

const approutes = [
    {
        element: <RenderOutlet />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    },
    {
        element: <ActiveLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            }
        ]        
    }
]

export default approutes