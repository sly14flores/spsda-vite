// MUI
import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme'; // CUSTOM COMPONENTS

import Footer from './Footer'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants';
export default function RootLayout({
  children
}) {
  return <Box bgcolor={isDark(useTheme()) ? 'background.default' : 'white'}>
      {
      /* MAIN CONTENT RENDER SECTION */
    }
      {children}

      {
      /* FOOTER SECTION */
    }
      <Footer />
    </Box>;
}