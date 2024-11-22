import { Fragment } from 'react'; // CUSTOM PAGE SECTION COMPONENTS

import Section1 from '../section-1';
import Section2 from '../section-2';
import Section3 from '../section-3';
import Section4 from '../section-4';
import HeaderEffect from '@/layouts/root/HeaderEffect';
export default function ProductDetailsPageView() {
  return <Fragment>
      {
      /* HERO SECTION */
    }
      <HeaderEffect>
        <Section1 />
      </HeaderEffect>

      {
      /* PRODUCT OVERVIEW */
    }
      <Section2 />

      {
      /* BANNER SECTION */
    }
      <Section3 />

      {
      /* RECOMMENDED SECTION */
    }
      <Section4 />
    </Fragment>;
}