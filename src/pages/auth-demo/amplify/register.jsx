import { AuthProvider } from '@/contexts/amplifyContext';
import RegisterView from './RegisterView';
export default function RegisterWithAmplify() {
  return <AuthProvider>
      <RegisterView />
    </AuthProvider>;
}