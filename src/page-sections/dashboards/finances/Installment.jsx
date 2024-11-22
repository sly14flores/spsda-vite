import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import LinearProgress from '@mui/material/LinearProgress'; // CUSTOM COMPONENTS

import RouterLink from '@/components/link';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { Paragraph, Span } from '@/components/typography';
export default function Installment() {
  return <Card className="p-3">
      <FlexBetween mb={2.5}>
        <Paragraph fontSize={18} fontWeight={500}>
          Installment
        </Paragraph>

        <Link component={RouterLink} href="/" color="grey.400" fontWeight={400}>
          View all
        </Link>
      </FlexBetween>

      <Paragraph color="grey.500" mb={1}>
        Electricity Installments
      </Paragraph>

      <LinearProgress value={60} variant="determinate" sx={{
      height: 8
    }} />

      <FlexBetween mt={0.5}>
        <Paragraph>Collected</Paragraph>
        <Paragraph>
          <Span color="text.secondary">$200.00</Span> / $300.00
        </Paragraph>
      </FlexBetween>
    </Card>;
}