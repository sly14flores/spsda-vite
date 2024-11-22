import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import LinearProgress from '@mui/material/LinearProgress'; // CUSTOM COMPONENTS

import { Paragraph } from '@/components/typography';
import { FlexBetween, FlexBox, FlexRowAlign } from '@/components/flexbox';
export default function CustomerReview() {
  return <Card className="p-3 h-full">
      <FlexRowAlign p={3} borderRadius={2} flexDirection="column" bgcolor="action.selected">
        <Rating size="large" name="read-only" value={4.5} precision={0.5} readOnly />

        <Paragraph py={1} lineHeight={1} fontWeight={600} fontSize={20}>
          4.5/5
        </Paragraph>

        <Paragraph color="text.secondary">Total 650 customer review</Paragraph>
      </FlexRowAlign>

      <Stack spacing={3} mt={4}>
        {[5, 4, 3, 2, 1].map(item => <FlexBetween gap={4} key={item}>
            <FlexBox gap={1} flex={1} alignItems="center">
              <Paragraph color="text.secondary" lineHeight={1}>
                {item} Star
              </Paragraph>

              <LinearProgress value={item * 20} variant="determinate" />
            </FlexBox>

            <Paragraph lineHeight={1} color="text.secondary">
              {item}0%
            </Paragraph>
          </FlexBetween>)}
      </Stack>
    </Card>;
}