import { AuthProvider } from '@/contexts/jwtContext';
import LoginView from './LoginView';
export default function LoginWithJWT() {
  return <AuthProvider>
      <LoginView />
    </AuthProvider>;
}