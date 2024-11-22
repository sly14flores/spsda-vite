import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton'; // CUSTOM COMPONENTS

import ListItem from './ListItem';
import { H6 } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM ICON COMPONENTS

import Edit from '@/icons/Edit';
import ShoppingCart from '@/icons/ShoppingCart'; // ===================================================================

// ===================================================================
export default function OrderSummery({
  showCoupon,
  showEditBtn,
  buttonText,
  handleClick
}) {
  return <Card className="p-3">
      <FlexBetween mb={4}>
        <H6 fontSize={16}>Order Summery</H6>

        {showEditBtn ? <IconButton>
            <Edit sx={{
          fontSize: 16,
          color: 'text.secondary'
        }} />
          </IconButton> : null}
      </FlexBetween>

      <Stack spacing={1.5} mb={5}>
        <ListItem title="Items" value={230} />
        <ListItem title="VATS 0%" value={0} />
        <ListItem title="Sub Total" value={230} />

        <Divider />
        <ListItem title="Total" value={230} valueColor="error.main" />
      </Stack>

      {showCoupon ? <FlexBox gap={1} mb={3}>
          <TextField size="small" placeholder="Apply Coupon" fullWidth />
          <Button sx={{
        px: 4
      }}>Apply</Button>
        </FlexBox> : null}

      <Button variant="contained" startIcon={<ShoppingCart />} fullWidth onClick={handleClick}>
        {buttonText}
      </Button>
    </Card>;
}