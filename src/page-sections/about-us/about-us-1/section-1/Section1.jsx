import Grid from '@mui/material/Grid2'; // CUSTOM COMPONENT

import FancyText from '@/components/fancy-text'; // STYLED COMPONENT

import { StyledRoot } from './styles';
export default function Section1() {
  return <StyledRoot>
      <Grid container spacing={3}>
        <Grid size={{
        lg: 6,
        md: 7,
        xs: 12
      }}>
          <h1 className="title">
            We build bridges between <FancyText className="fancy-text">Companies</FancyText> and{' '}
            <FancyText className="fancy-text">Customers</FancyText>
          </h1>
        </Grid>

        <Grid size={{
        lg: 6,
        md: 5,
        xs: 12
      }}>
          <p className="description">
            To build software that gives customer-facing teams at small-and medium-sized businesses
            the ability to create fruitful and enduring relationships with customer
          </p>
        </Grid>
      </Grid>
    </StyledRoot>;
}