import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // MUI

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; // CUSTOM COMPONENTS

import Modal from '@/components/modal';
import { H6 } from '@/components/typography';
import { FlexBetween } from '@/components/flexbox'; // CUSTOM ICON COMPONENTS

import Add from '@/icons/Add';
import ChevronLeft from '@/icons/ChevronLeft'; // CUSTOM PAGE SECTION COMPONENTS

import Stepper from '../Stepper';
import OrderSummery from '../order-summery';
import BillingAddressCard from '../billing-address-card';
import AddBillingAddressForm from '../add-billing-address-form/AddBillingAddressForm';
export default function BillingAddressPageView() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [selectBillingAddress, setSelectBillingAddress] = useState(1); // MODAL CLOSE HANDLER

  const handleClose = () => setOpenModal(false);

  const handleSelectBillingAddress = id => {
    setSelectBillingAddress(id);
  };

  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        {
        /* STEPPER SECTION */
      }
        <Grid size={12}>
          <Box mt={3} mb={1} maxWidth={700}>
            <Stepper stepNo={1} />
          </Box>
        </Grid>

        {
        /* BILLING ADDRESS LIST */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <FlexBetween flexWrap="wrap" gap={1.5} mb={3}>
            <H6 fontSize={16}>Billing & address</H6>

            <Button variant="contained" startIcon={<Add />} onClick={() => setOpenModal(true)}>
              Add New Address
            </Button>
          </FlexBetween>

          <Modal open={openModal} handleClose={handleClose}>
            <AddBillingAddressForm handleCancel={handleClose} />
          </Modal>

          <Stack gap={2}>
            {[1, 2, 3].map(item => <BillingAddressCard key={item} selected={selectBillingAddress === item} handleChange={() => handleSelectBillingAddress(item)} />)}
          </Stack>

          <Box mt={2}>
            <Button disableRipple variant="text" startIcon={<ChevronLeft />} onClick={() => navigate('/dashboard/cart')}>
              Back
            </Button>
          </Box>
        </Grid>

        {
        /* ORDER SUMMERY SECTION */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <OrderSummery buttonText="Payment" handleClick={() => navigate('/dashboard/payment')} />
        </Grid>
      </Grid>
    </div>;
}