import Grid from '@mui/material/Grid2'; // CUSTOM PAGE SECTION COMPONENTS

import Footer from '../../_common/Footer';
import TotalItems from '../TotalItems';
import TotalOrder from '../TotalOrder';
import YearlySales from '../YearlySales';
import AllChannels from '../AllChannels';
import CheckUpdate from '../CheckUpdate';
import ChartFilters from '../ChartFilters';
import AllCampaigns from '../AllCampaigns';
import YearlyRevenue from '../YearlyRevenue';
import YoutubeCampaign from '../YoutubeCampaign';
import ShipmentHistory from '../../logistics/ShipmentHistory';
export default function MarketingPageView() {
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        {
        /* TOTAL ITEMS CARD */
      }
        <Grid size={{
        lg: 3,
        sm: 6,
        xs: 12
      }}>
          <TotalItems />
        </Grid>

        {
        /* YEARLY SALES CARD */
      }
        <Grid size={{
        lg: 3,
        sm: 6,
        xs: 12
      }}>
          <YearlySales />
        </Grid>

        {
        /* TOTAL ORDER CARD */
      }
        <Grid size={{
        lg: 3,
        sm: 6,
        xs: 12
      }}>
          <TotalOrder />
        </Grid>

        {
        /* YEARLY REVENUE CARD */
      }
        <Grid size={{
        lg: 3,
        sm: 6,
        xs: 12
      }}>
          <YearlyRevenue />
        </Grid>

        {
        /* CHART FILTERS CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <ChartFilters />
        </Grid>

        {
        /* ALL CHANNELS CARD  */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <AllChannels />
        </Grid>

        {
        /* YOUTUBE CAMPAIGN CHART CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <YoutubeCampaign />
        </Grid>

        {
        /* ALL CAMPAIGNS LIST CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <AllCampaigns />
        </Grid>

        {
        /* CHECK UPDATE CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <CheckUpdate />
        </Grid>

        {
        /* SHIPMENT HISTORY CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <ShipmentHistory />
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