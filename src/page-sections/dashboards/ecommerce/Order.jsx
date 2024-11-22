import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import LinearProgress from '@mui/material/LinearProgress'; // CUSTOM COMPONENTS

import Percentage from '@/components/percentage';
import { H6, Paragraph } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM UTILS METHOD

import { format } from '@/utils/currency';
export default function Order() {
  return <Card sx={{
    padding: 3,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }}>
      <div>
        <FlexBox alignItems="center" gap={1}>
          <H6>{format(1352)}</H6>
          <Percentage type="error">-2.2%</Percentage>
        </FlexBox>

        <Paragraph color="text.secondary">Order This Month</Paragraph>
      </div>

      <Box mt={7}>
        <FlexBetween mb={1}>
          <Paragraph fontWeight={600}>1,500 to Goal</Paragraph>
          <Paragraph color="text.secondary">75%</Paragraph>
        </FlexBetween>

        <LinearProgress value={60} color="success" variant="determinate" sx={{
        height: 8
      }} />
      </Box>
    </Card>;
}