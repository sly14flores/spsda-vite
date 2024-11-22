import { Fragment } from 'react';
import Container from '@mui/material/Container'; // CUSTOM PAGE SECTION COMPONENTS

import Banner from '../Banner';
import Section1 from '../section-1';
import Section2 from '../section-2';
import Section3 from '../section-3';
import Section4 from '../section-4';
import HeaderEffect from '@/layouts/root/HeaderEffect';
export default function AboutUs1PageView() {
  return <Fragment>
      {
      /* HERO SECTION */
    }
      <HeaderEffect>
        <Section1 />
      </HeaderEffect>

      <Container maxWidth="lg">
        {
        /* BIG BANNER IMAGE */
      }
        <Banner />

        {
        /* WHO ARE WE SECTION */
      }
        <Section2 />

        {
        /* MEET OUR TEAM SECTION */
      }
        <Section3 />
      </Container>

      {
      /* CUSTOMER SAYS SECTION */
    }
      <Section4 />
    </Fragment>;
}