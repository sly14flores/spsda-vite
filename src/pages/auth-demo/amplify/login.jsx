import { AuthProvider } from '@/contexts/amplifyContext';
import LoginView from './LoginView';
export default function LoginWithAmplify() {
  return <AuthProvider>
      <LoginView />
    </AuthProvider>;
}