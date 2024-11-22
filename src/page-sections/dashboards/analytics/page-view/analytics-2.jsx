import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack'; // CUSTOM PAGE SECTION COMPONENTS

import Footer from '../../_common/Footer';
import TopQueries from '../TopQueries';
import TopReferral from '../TopReferral';
import ChartFilters from '../ChartFilters';
import CompleteGoal from '../CompleteGoal';
import CompleteRate from '../CompleteRate';
import TopPerforming from '../TopPerforming';
import SessionBrowser from '../SessionBrowser';
import SalesByCountry from '../SalesByCountry';
import AveragePosition from '../AveragePosition';
export default function Analytics2PageView() {
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        {
        /* AVERAGE POSITION CHART CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <AveragePosition />
        </Grid>

        {
        /* DIFFERENT DATA SHOW WITH CHART */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <ChartFilters type="line" />
        </Grid>

        {
        /* VISIT BY TOP REFERRAL SOURCE CHART CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <TopReferral />
        </Grid>

        {
        /* SESSION BY BROWSER CHART CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <SessionBrowser />
        </Grid>

        {
        /* COMPLETE GOAL AND RATES CARDS */
      }
        <Grid size={{
        lg: 3,
        xs: 12
      }}>
          <Stack spacing={3} sx={{
          '& > div': {
            flex: 1
          }
        }} direction={{
          lg: 'column',
          sm: 'row',
          xs: 'column'
        }}>
            <CompleteGoal chart="area" />
            <CompleteRate />
          </Stack>
        </Grid>

        {
        /* SALES BY COUNTRY CHART CARD */
      }
        <Grid size={{
        lg: 9,
        xs: 12
      }}>
          <SalesByCountry chartHorizontal />
        </Grid>

        {
        /* TOP PERFORMING PAGE TABLE CARD */
      }
        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <TopPerforming />
        </Grid>

        {
        /* TOP QUERIES TABLE CARD */
      }
        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <TopQueries />
        </Grid>

        {
        /* FOOTER CARD */
      }
        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>;
}