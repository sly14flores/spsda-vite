import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider'; // CUSTOM COMPONENTS

import { H6 } from '@/components/typography';
import HistoryTable from './components/HistoryTable';
import NewAddressCard from './components/NewAddressCard';
import BillingAddress from './components/BillingAddress';
import PaymentMethodsTable from './components/PaymentMethodsTable';
import BillingAddressListItem from './components/BillingAddressListItem';
export default function Billing() {
  return <Card>
      <H6 fontSize={14} p={3}>
        Billing
      </H6>

      <Divider />

      {
      /* BILLING DETAILS */
    }
      <BillingAddress />

      {
      /* PAYMENT METHODS */
    }
      <PaymentMethodsTable />

      {
      /* BILLING ADDRESS */
    }
      <Box padding={3}>
        <H6 fontSize={14} mb={3}>
          Billing Address
        </H6>

        <Grid container spacing={3}>
          <Grid size={{
          md: 6,
          xs: 12
        }}>
            <BillingAddressListItem />
          </Grid>

          <Grid size={{
          md: 6,
          xs: 12
        }}>
            <BillingAddressListItem />
          </Grid>

          <Grid size={{
          md: 6,
          xs: 12
        }}>
            <BillingAddressListItem />
          </Grid>

          <Grid size={{
          md: 6,
          xs: 12
        }}>
            <NewAddressCard />
          </Grid>
        </Grid>
      </Box>

      {
      /* BILLING HISTORY */
    }
      <HistoryTable />
    </Card>;
}