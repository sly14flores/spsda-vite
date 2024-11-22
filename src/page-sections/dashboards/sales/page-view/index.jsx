import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack'; // MUI ICON COMPONENTS

import TrendingUp from '@mui/icons-material/TrendingUp';
import ShoppingCart from '@mui/icons-material/ShoppingCart'; // CUSTOM ICON COMPONENTS

import MoneyIcon from '@/icons/MoneyIcon'; // CUSTOM COMPONENTS

import SalesCard from '../SalesCard';
import OrderStats from '../OrderStats';
import TotalSales from '../TotalSales';
import EarningCard from '../EarningCard';
import PopularProducts from '../PopularProducts';
import RevenueStatistics from '../RevenueStatistics';
import SalesProductDetails from '../SalesProductDetails';
import { Footer } from '@/page-sections/dashboards/_common';
export default function SalesPageView() {
  const SALES_LIST = [{
    id: 1,
    amount: 785000,
    Icon: ShoppingCart,
    title: 'Total Orders',
    color: 'primary'
  }, {
    id: 2,
    amount: 32654,
    Icon: MoneyIcon,
    title: 'Orders Completed',
    color: 'success'
  }, {
    id: 3,
    amount: 1200,
    Icon: TrendingUp,
    title: 'Orders Cancelled',
    color: 'error'
  }];
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <Stack spacing={3}>
            {
            /* TOTAL EARNINGS CARD */
          }
            <EarningCard />

            {
            /* SALES DATA CARDS */
          }
            <SalesCard list={SALES_LIST} />

            {
            /* REVENUE STATISTICS DATA VISUAL CHART */
          }
            <RevenueStatistics />

            {
            /* POPULAR PRODUCTS DATA TABLE */
          }
            <PopularProducts />
          </Stack>
        </Grid>

        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <Stack spacing={3}>
            {
            /* TOTAL SALES CARD */
          }
            <TotalSales />

            {
            /* SALES PRODUCTS DATA VISUAL CHART */
          }
            <SalesProductDetails />

            {
            /* ORDER STATS DATA VISUAL CHART */
          }
            <OrderStats />
          </Stack>
        </Grid>

        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>;
}