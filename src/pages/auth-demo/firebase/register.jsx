import { AuthProvider } from '@/contexts/firebaseContext';
import RegisterView from './RegisterView';
export default function RegisterWithFirebase() {
  return <AuthProvider>
      <RegisterView />
    </AuthProvider>;
}