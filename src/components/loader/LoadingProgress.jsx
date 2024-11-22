import { useEffect } from 'react';
import Box from '@mui/material/Box';
import NProgress from 'nprogress';
export default function LoadingProgress() {
  NProgress.configure({
    showSpinner: false
  });
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
  return <Box minHeight="100vh" />;
}