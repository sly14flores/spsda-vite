import { lazy } from 'react';
import Loadable from '@/routes/Loadable';

import { GuestGuard } from '@/components/auth';
import RenderOutlet from '@/spsda/pages/outlet-renderer';
const Login = Loadable(lazy(() => import('@/spsda/pages/login')));

const approutes = [
    {
        element: <RenderOutlet />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
]

export default approutes