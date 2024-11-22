import Switch from '@mui/material/Switch'; // STYLED COMPONENTS

import { StyledRoot } from './styles';
export default function Section1() {
  return <StyledRoot>
      <h1 className="title">Our Flexible Price Plan</h1>

      <p>
        Our Free Plan lets you get going right away. Switch <br /> to a Pro plan to get more
        features.
      </p>

      <div className="price-navigator">
        <p>MONTHLY</p>

        <Switch />

        <p>YEARLY (Save 15%)</p>
      </div>
    </StyledRoot>;
}