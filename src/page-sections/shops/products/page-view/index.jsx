import { Fragment } from 'react';
import Container from '@mui/material/Container'; // CUSTOM PAGE SECTION COMPONENTS

import Section1 from '../section-1';
import Section2 from '../section-2';
import HeaderEffect from '@/layouts/root/HeaderEffect';
export default function ProductsPageView() {
  return <Fragment>
      {
      /* HERO SECTION */
    }
      <HeaderEffect>
        <Section1 />
      </HeaderEffect>

      <Container maxWidth="lg">
        <Section2 />
      </Container>
    </Fragment>;
}