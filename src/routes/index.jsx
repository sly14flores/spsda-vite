import { lazy } from 'react';
import Loadable from './Loadable';
import { AuthRoutes } from './auth';
import { PublicRoutes } from './public';
import { DashboardRoutes } from './dashboard';
import { ComponentRoutes } from './components'; // GLOBAL ERROR PAGE

const ErrorPage = Loadable(lazy(() => import('@/pages/404'))); // LANDING / INITIAL PAGE
const Landing = Loadable(lazy(() => import('@/pages/landing')));

export const routes = () => {
  return [
    {
      path: '/',
      element: <>Hello, World</>
    },
    { // Demo Pages
      path: '/demo',
      element: <Landing />,
      children: [
        ...AuthRoutes, // COMPONENTS PAGES ROUTES
        ...ComponentRoutes, // INSIDE DASHBOARD PAGES ROUTES
        ...DashboardRoutes, // PAGES ROUTES
        ...PublicRoutes
      ]
    }, // GLOBAL ERROR PAGE
    {
      path: '*',
      element: <ErrorPage />
    }
  ];
};