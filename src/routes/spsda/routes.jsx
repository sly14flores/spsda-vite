import { lazy } from 'react';
import Loadable from '@/routes/Loadable';

import { GuestGuard } from '@/spsda/components/auth';
import RenderOutlet from '@/spsda/pages/outlet-renderer';
const Login = Loadable(lazy(() => import('@/spsda/pages/login')));

const approutes = [
    {
        element: <GuestGuard />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
]

export default approutes