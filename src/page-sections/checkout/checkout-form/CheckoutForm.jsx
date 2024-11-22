import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM ICON COMPONENTS

import CircleOutlined from '@/icons/CircleOutlined';
import CheckCircleOutline from '@/icons/CheckCircleOutline'; // STYLED COMPONENTS

import { CardWrapper, StyledCard } from './styles'; // ==============================================================

// ==============================================================
export default function CheckoutForm({
  handleSelectedPayment,
  activeMethod
}) {
  return <StyledCard>
      <Grid container spacing={3}>
        {
        /* BILLING ADDRESS FORM */
      }
        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <H6 fontSize={24} mb={4}>
            Billing Address
          </H6>

          <Stack spacing={2}>
            <TextField placeholder="Person Name" />
            <TextField placeholder="Email Address" />
            <TextField placeholder="Phone No." />
            <TextField placeholder="Address" />
          </Stack>
        </Grid>

        {
        /* PAYMENT METHOD SELECTION */
      }
        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <H6 fontSize={24} mb={4}>
            Payment Method
          </H6>

          <Stack spacing={2}>
            {
            /* PAYPAL METHOD */
          }
            <CardWrapper as={FlexBetween} active={activeMethod('paypal') ? 1 : 0} onClick={() => handleSelectedPayment('paypal')}>
              <FlexBox gap={1} alignItems="center">
                {activeMethod('paypal') ? <CheckCircleOutline color="primary" /> : <CircleOutlined />}
                <Paragraph fontWeight={500}>PayPal</Paragraph>
              </FlexBox>

              <img src="/static/payment/paypal.svg" alt="paypal" />
            </CardWrapper>

            {
            /* CREDIT CARD METHOD */
          }
            <CardWrapper active={activeMethod('card') ? 1 : 0} onClick={() => handleSelectedPayment('card')}>
              <FlexBetween>
                <FlexBox gap={1} alignItems="center">
                  {activeMethod('card') ? <CheckCircleOutline color="primary" /> : <CircleOutlined />}
                  <Paragraph fontWeight={500}>Credit/Debit</Paragraph>
                </FlexBox>

                <FlexBox gap={1} alignItems="center">
                  <img src="/static/payment/master-card.svg" alt="Master Card" />
                  <img src="/static/payment/Visa.svg" alt="Visa Card" />
                </FlexBox>
              </FlexBetween>

              {activeMethod('card') && <Box pt={3}>
                  <TextField fullWidth placeholder="Card No" />
                  <FlexBox mt={2} gap={2}>
                    <TextField fullWidth placeholder="Expiry Date" />
                    <TextField fullWidth placeholder="Card CVC" />
                  </FlexBox>
                </Box>}
            </CardWrapper>
          </Stack>
        </Grid>
      </Grid>
    </StyledCard>;
}