import Grid from '@mui/material/Grid2'; // CUSTOM COMPONENTS

import InfoCard from '../InfoCard';
import RecentOrders from '../RecentOrders';
import EarningReport from '../EarningReport';
import ProjectStatus from '../ProjectStatus';
import LeadVSCustomer from '../LeadVsCustomer';
import PopularProducts from '../PopularProducts';
import { Footer } from '@/page-sections/dashboards/_common'; // CUSTOM DATA

import { CARD_LIST } from '@/__fakeData__/dashboards/sales';
export default function SalesV2PageView() {
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        {
        /* DIFFERENT ANALYTICS DATA */
      }
        <Grid container spacing={3} size={{
        lg: 6,
        xs: 12
      }}>
          {CARD_LIST.map((item, index) => <Grid key={index} size={{
          lg: 6,
          md: 3,
          sm: 6,
          xs: 12
        }}>
              <InfoCard trend={item.trend} title={item.title} amount={item.amount} percentage={item.percentage} />
            </Grid>)}
        </Grid>

        {
        /* EARNING REPORT DATA VISUAL CHART */
      }
        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <EarningReport />
        </Grid>

        {
        /* LEAD & CUSTOMER DATA VISUAL CHART */
      }
        <Grid size={{
        lg: 8,
        md: 7,
        xs: 12
      }}>
          <LeadVSCustomer />
        </Grid>

        {
        /* PROJECT STATUS DATA VISUAL CHART */
      }
        <Grid size={{
        lg: 4,
        md: 5,
        xs: 12
      }}>
          <ProjectStatus />
        </Grid>

        {
        /* POPULAR PRODUCTS DATA TABLE */
      }
        <Grid size={{
        lg: 8,
        md: 7,
        xs: 12
      }}>
          <PopularProducts />
        </Grid>

        {
        /* RECENT ORDER LIST CARD */
      }
        <Grid size={{
        lg: 4,
        md: 5,
        xs: 12
      }}>
          <RecentOrders />
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