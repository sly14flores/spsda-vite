import { Suspense } from 'react';
import { LoadingProgress } from '@/components/loader';

const Loadable = Component => props => {
  return <Suspense fallback={<LoadingProgress />}>
      <Component {...props} />
    </Suspense>;
};

export default Loadable;