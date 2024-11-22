import { Fragment } from 'react'; // CUSTOM PAGE SECTION COMPONENTS

import Section1 from '../section-1';
import Section2 from '../section-2';
import HeaderEffect from '@/layouts/root/HeaderEffect';
export default function ContactUsPageView() {
  return <Fragment>
      {
      /* EXPLORE OUR WORLD SECTION */
    }
      <HeaderEffect>
        <Section1 />
      </HeaderEffect>

      {
      /* CONTACT FORM SECTION */
    }
      <Section2 />
    </Fragment>;
}