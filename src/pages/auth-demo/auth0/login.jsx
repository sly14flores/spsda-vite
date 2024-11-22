import { AuthProvider } from '@/contexts/auth0Context';
import LoginView from './LoginView';
export default function LoginWithAuth0() {
  return <AuthProvider>
      <LoginView />
    </AuthProvider>;
}