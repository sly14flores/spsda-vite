import Box from '@mui/material/Box';
import Container from '@mui/material/Container'; // CUSTOM PAGE SECTIONS COMPONENTS

import Footer from '../footer';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section4 from '../Section4';
import Header from '@/layouts/root/Navigation';
export default function LandingPageView() {
  return <Box sx={{
    height: '100%',
    overflowX: 'hidden',
    backgroundColor: 'background.default'
  }}>
      {
      /* DARK HEADER AREA */
    }
      <Box bgcolor="#1C113D">
        <Container maxWidth="lg">
          <Header />
        </Container>
      </Box>

      {
      /* ONION HERO AREA */
    }
      <Section1 />

      {
      /* CORE FEATURES AREA */
    }
      <Section2 />

      {
      /* VAST COLLECTION COMPONENTS AREA */
    }
      <Section3 />

      {
      /* APPS & PAGES AREA */
    }
      <Section4 />

      {
      /* FOOTER AREA */
    }
      <Footer />
    </Box>;
}