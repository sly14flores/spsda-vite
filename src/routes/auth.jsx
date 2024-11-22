import { lazy } from 'react';
import Loadable from './Loadable';
import { GuestGuard } from '@/components/auth'; // AUTHENTICATION RELATED PAGES

const Login = Loadable(lazy(() => import('@/pages/sessions/login')));
const Register = Loadable(lazy(() => import('@/pages/sessions/register')));
const VerifyCode = Loadable(lazy(() => import('@/pages/sessions/verify-code')));
const ForgetPassword = Loadable(lazy(() => import('@/pages/sessions/forget-password'))); // DIFFERENT AUTH DEMO PAGES

const LoginDemoWithAuth0 = Loadable(lazy(() => import('@/pages/auth-demo/auth0/login')));
const LoginDemoWithJWT = Loadable(lazy(() => import('@/pages/auth-demo/jwt/login')));
const RegisterDemoWithJWT = Loadable(lazy(() => import('@/pages/auth-demo/jwt/register')));
const LoginDemoWithFirebase = Loadable(lazy(() => import('@/pages/auth-demo/firebase/login')));
const RegisterDemoWithFirebase = Loadable(lazy(() => import('@/pages/auth-demo/firebase/register')));
const LoginDemoWithAmplify = Loadable(lazy(() => import('@/pages/auth-demo/amplify/login')));
const RegisterDemoWithAmplify = Loadable(lazy(() => import('@/pages/auth-demo/amplify/register')));
const VerifyDemoWithAmplify = Loadable(lazy(() => import('@/pages/auth-demo/amplify/verify')));
export const AuthRoutes = [// AUTHENTICATION PAGES ROUTES
{
  element: <GuestGuard />,
  children: [{
    path: 'login',
    element: <Login />
  }, {
    path: 'register',
    element: <Register />
  }, {
    path: 'forget-password',
    element: <ForgetPassword />
  }, {
    path: 'verify-code',
    element: <VerifyCode />
  }]
}, // DIFFERENT AUTH DEMO PAGES ROUTES
{
  path: 'auth0/login',
  element: <LoginDemoWithAuth0 />
}, {
  path: 'jwt/login',
  element: <LoginDemoWithJWT />
}, {
  path: 'jwt/register',
  element: <RegisterDemoWithJWT />
}, {
  path: 'firebase/login',
  element: <LoginDemoWithFirebase />
}, {
  path: 'firebase/register',
  element: <RegisterDemoWithFirebase />
}, {
  path: 'amplify/login',
  element: <LoginDemoWithAmplify />
}, {
  path: 'amplify/register',
  element: <RegisterDemoWithAmplify />
}, {
  path: 'amplify/verify',
  element: <VerifyDemoWithAmplify />
}];