import { AuthProvider } from '@/contexts/jwtContext';
import RegisterView from './RegisterView';
export default function RegisterWithJWT() {
  return <AuthProvider>
      <RegisterView />
    </AuthProvider>;
}