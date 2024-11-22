import SectionTitle from '@/components/section-title'; // STYLED COMPONENT

import { StyledRoot } from './styles';
export default function Section1() {
  return <StyledRoot>
      <SectionTitle centered title="Shops" color="white" />
      <p className="description">See our top most selling products.</p>
    </StyledRoot>;
}