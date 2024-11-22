import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import AlertTitle from '@mui/material/AlertTitle';
import LinearProgress from '@mui/material/LinearProgress'; // MUI ICON COMPONENTS

import Info from '@mui/icons-material/Info'; // CUSTOM COMPONENTS

import { Paragraph } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween';
export default function BillingAddress() {
  return <Box padding={3}>
      <Alert severity="info" variant="outlined" icon={<Info />} action={<Button>Add Payment Method</Button>}>
        <AlertTitle>We Need Your Attention</AlertTitle>
        Your payment was declined. To start using tools, please add Payment Method
      </Alert>

      <Stack spacing={2.5} maxWidth={400} py={4}>
        <div>
          <FlexBetween mb={0.5}>
            <Paragraph fontWeight={500}>Users</Paragraph>
            <Paragraph fontWeight={500} color="primary.main">
              50%
            </Paragraph>
          </FlexBetween>

          <LinearProgress value={50} variant="determinate" />

          <Paragraph fontSize={13} mt={1} color="text.secondary">
            14 Users remaining until your plan requires update
          </Paragraph>
        </div>

        <div>
          <Paragraph fontWeight={500}>Active until Dec 09, 2021</Paragraph>
          <Paragraph fontSize={13} mt={0.5} color="text.secondary">
            We will send you a notification upon Subscription expiration
          </Paragraph>
        </div>

        <div>
          <Paragraph fontWeight={500}>$24.99 Per Month</Paragraph>
          <Paragraph fontSize={13} mt={0.5} color="text.secondary">
            Extended Pro Package. Up to 100 Agents & 25 Projects
          </Paragraph>
        </div>
      </Stack>

      <Stack direction="row" spacing={3}>
        <Button variant="contained">Upgrade Plan</Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </Box>;
}