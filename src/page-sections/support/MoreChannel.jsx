import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import FlexBox from '@/components/flexbox/FlexBox';
import { H6, Paragraph } from '@/components/typography'; // CUSTOM DUMMY DATA

import { CHANNELS } from './data';
export default function MoreChannel() {
  return <Card className="p-3">
      <H6 fontSize={18} mb={3}>
        More Channel
      </H6>

      <Stack spacing={2}>
        {CHANNELS.map(({
        id,
        image,
        title
      }) => <FlexBox alignItems="center" gap={1.5} key={id}>
            <FlexBox alignItems="center" width={25}>
              <img src={image} alt="" width="100%" height="100%" />
            </FlexBox>

            <div>
              <Paragraph fontSize={16}>{title}</Paragraph>
              <Paragraph color="text.secondary">
                Follow us at <Link href="#">UI-Lib</Link>
              </Paragraph>
            </div>
          </FlexBox>)}
      </Stack>
    </Card>;
}