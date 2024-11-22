import LinearProgress from '@mui/material/LinearProgress'; // CUSTOM COMPONENTS

import { Paragraph } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween'; // CUSTOM UTILS METHOD

import { formatK } from '@/utils/currency'; // ==========================================================================================

// ==========================================================================================
export default function RatingDetails({
  title,
  progressValue,
  totalReview
}) {
  return <FlexBetween>
      <Paragraph fontWeight={500} lineHeight={1}>
        {title}
      </Paragraph>

      <LinearProgress color="success" variant="determinate" value={progressValue} sx={{
      mx: 2
    }} />

      <Paragraph color="text.secondary" fontWeight={500}>
        {formatK(totalReview, 'decimal')}
      </Paragraph>
    </FlexBetween>;
}