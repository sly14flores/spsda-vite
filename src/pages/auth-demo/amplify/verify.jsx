import VerifyView from './VerifyView';
import { AuthProvider } from '@/contexts/amplifyContext';
export default function VerifyWithAmplify() {
  return <AuthProvider>
      <VerifyView />
    </AuthProvider>;
}