import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack'; // CUSTOM PAGE SECTION COMPONENTS

import Footer from '../../_common/Footer';
import LiveUser from '../LiveUser';
import TopQueries from '../TopQueries';
import TopReferral from '../TopReferral';
import ChartFilters from '../ChartFilters';
import CompleteGoal from '../CompleteGoal';
import CompleteRate from '../CompleteRate';
import TopPerforming from '../TopPerforming';
import SessionBrowser from '../SessionBrowser';
import SalesByCountry from '../SalesByCountry';
export default function Analytics1PageView() {
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        {
        /* DIFFERENT DATA SHOW WITH CHART */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <ChartFilters />
        </Grid>

        {
        /* LIVER ONLINE USER CHART CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <LiveUser />
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
        /* COMPLETE GOAL AND RATES CHART CARD */
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
            <CompleteGoal />
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
          <SalesByCountry />
        </Grid>

        {
        /* TOP PERFORMING PAGES CHART CARD */
      }
        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <TopPerforming />
        </Grid>

        {
        /* TOP QUERIES CHART CARD */
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