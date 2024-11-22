import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack'; // CUSTOM COMPONENTS

import Offers from '../Offers';
import Overview from '../overview';
import Section1 from '../section-1';
import Description from '../Description';
import Requirements from '../Requirements';
import GradientBackground from '@/components/gradient-background';
import HeaderEffect from '@/layouts/root/HeaderEffect'; // STYLED COMPONENTS

import { Space, StyledContainer } from './styles';
export default function CareerDetailsPageView() {
  return <GradientBackground>
      {
      /* HEADER SECTION */
    }
      <HeaderEffect>
        <Space />
      </HeaderEffect>

      <StyledContainer maxWidth="lg">
        {
        /* JOB NAME CARD */
      }
        <Section1 />

        <Grid container spacing={10} pt={7}>
          <Grid size={{
          lg: 8,
          md: 7,
          xs: 12
        }}>
            <Stack spacing={6}>
              {
              /* JOB DESCRIPTION SECTION */
            }
              <Description />

              {
              /* JOB REQUIREMENTS SECTION */
            }
              <Requirements />

              {
              /* WHAT WE OFFER SECTION */
            }
              <Offers />
            </Stack>
          </Grid>

          <Grid size={{
          lg: 4,
          md: 5,
          xs: 12
        }}>
            {
            /* JOB OVERVIEW SECTION */
          }
            <Overview />
          </Grid>
        </Grid>
      </StyledContainer>
    </GradientBackground>;
}