import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack'; // CUSTOM PAGE SECTION COMPONENTS

import Footer from '../../_common/Footer';
import Audits from '../Audits';
import Reports from '../Reports';
import Balance from '../Balance';
import DebitCard from '../DebitCard';
import MySavings from '../MySavings';
import Investment from '../Investment';
import Installment from '../Installment';
import TopActivity from '../TopActivity';
import Transactions from '../Transactions';
import QuickTransfer from '../QuickTransfer';
import CurrentCurrency from '../CurrentCurrency';
import CustomerTransaction from '../CustomerTransaction';
export default function Finance1PageView() {
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        {
        /* MY BALANCE CARD */
      }
        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <Balance />
        </Grid>

        {
        /* CURRENT CURRENCY CHART CARD */
      }
        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <CurrentCurrency />
        </Grid>

        {
        /* TRANSACTION CHART CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <Transactions />
        </Grid>

        {
        /* YOUR CARD  */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <DebitCard />
        </Grid>

        {
        /* QUICK TRANSFER AND INSTALLMENT CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <Stack spacing={3}>
            <QuickTransfer />
            <Installment />
          </Stack>
        </Grid>

        {
        /* CUSTOMER TRANSACTION TABLE */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <CustomerTransaction />
        </Grid>

        {
        /* INVESTMENT CHART CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <Investment />
        </Grid>

        {
        /* TOP ACTIVITY CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <TopActivity />
        </Grid>

        {
        /* MY SAVINGS CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <MySavings />
        </Grid>

        {
        /* AUDITS CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <Audits />
        </Grid>

        {
        /* REPORTS CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <Reports />
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