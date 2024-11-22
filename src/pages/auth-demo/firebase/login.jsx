import { AuthProvider } from '@/contexts/firebaseContext';
import LoginView from './LoginView';
export default function LoginWithFirebase() {
  return <AuthProvider>
      <LoginView />
    </AuthProvider>;
}