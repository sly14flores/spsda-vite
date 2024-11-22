import Grid from '@mui/material/Grid2'; // CUSTOM PAGE SECTION COMPONENTS

import Footer from '../../_common/Footer';
import Balance from '../Balance';
import DebitCard from '../DebitCard';
import MySavings from '../MySavings';
import Transactions from '../Transactions';
import WalletSummery from '../WalletSummery';
import InvestmentTwo from '../InvestmentTwo';
import TopActivityTwo from '../TopActivityTwo';
import ExpenseHistory from '../ExpenseHistory';
import CurrentCurrencyTwo from '../CurrentCurrencyTwo';
import CustomerTransaction from '../CustomerTransaction';
export default function Finance2PageView() {
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
          <CurrentCurrencyTwo />
        </Grid>

        {
        /* TRANSACTION CHART CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <Transactions type="line" />
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
        /* WALLET SUMMERY CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <WalletSummery />
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
          <InvestmentTwo />
        </Grid>

        {
        /* TOP ACTIVITY CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <TopActivityTwo />
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
        md: 8,
        xs: 12
      }}>
          <ExpenseHistory />
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