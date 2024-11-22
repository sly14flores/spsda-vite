import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { H6, Paragraph } from '@/components/typography'; // CUSTOM DUMMY DATA

import { DOCUMENTATIONS } from './data';
export default function Documentation() {
  return <Card sx={{
    p: 3,
    mt: 3
  }}>
      <H6 fontSize={18} mb={3}>
        Documentations
      </H6>

      <Stack spacing={2.5}>
        {DOCUMENTATIONS.map(item => <FlexBox alignItems="center" gap={1} key={item}>
            <Box width={8} height={8} borderRadius="50%" bgcolor="grey.300" />
            <Paragraph color="grey.500" fontWeight={500}>
              {item}
            </Paragraph>
          </FlexBox>)}
      </Stack>
    </Card>;
}