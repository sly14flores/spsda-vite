import { Fragment } from 'react'; // CUSTOM COMPONENTS

import Section1 from '../section-1';
import Section2 from '../section-2';
import HeaderEffect from '@/layouts/root/HeaderEffect';
export default function PricingPageView() {
  return <Fragment>
      <HeaderEffect>
        <Section1 />
      </HeaderEffect>

      <Section2 />
    </Fragment>;
}