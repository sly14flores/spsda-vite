import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import { H6, Small } from '@/components/typography'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants';
export const StyledCard = styled(Card)(({
  theme
}) => ({
  padding: '1rem',
  height: '100%',
  minHeight: 100,
  display: 'flex',
  boxShadow: 'none',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100],
  '& .content': {
    minWidth: '60%'
  }
}));
export default function NewAddressCard() {
  return <StyledCard>
      <div className="content">
        <H6 fontSize={14}>Enter a new address</H6>
        <Small color="grey.500">Add your new destination..</Small>
      </div>

      <Button variant="contained">New Address</Button>
    </StyledCard>;
}