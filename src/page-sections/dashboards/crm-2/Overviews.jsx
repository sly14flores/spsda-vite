import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import { FlexBox, FlexBetween } from '@/components/flexbox';
import { H6, Paragraph, Span } from '@/components/typography';
export default function Overviews() {
  const LIST = [{
    title: 'Invoice Overview',
    color: 'primary.main',
    element: [{
      name: 'Draft',
      value: 6,
      progress: 42
    }, {
      name: 'Not Sent',
      value: 8,
      progress: 21
    }, {
      name: 'Unpaid',
      value: 3,
      progress: 14
    }, {
      name: 'Overdue',
      value: 0,
      progress: 5
    }, {
      name: 'Paid',
      value: 6,
      progress: 7
    }]
  }, {
    title: 'Estimate Overview',
    color: 'info.main',
    element: [{
      name: 'Draft',
      value: 6,
      progress: 42
    }, {
      name: 'Not Sent',
      value: 8,
      progress: 21
    }, {
      name: 'Unpaid',
      value: 3,
      progress: 14
    }, {
      name: 'Overdue',
      value: 0,
      progress: 5
    }, {
      name: 'Paid',
      value: 6,
      progress: 7
    }]
  }, {
    title: 'Proposal Overview',
    color: 'warning.main',
    element: [{
      name: 'Draft',
      value: 6,
      progress: 42
    }, {
      name: 'Not Sent',
      value: 8,
      progress: 21
    }, {
      name: 'Unpaid',
      value: 3,
      progress: 14
    }, {
      name: 'Overdue',
      value: 0,
      progress: 5
    }, {
      name: 'Paid',
      value: 6,
      progress: 7
    }]
  }];
  return <Card className="h-full">
      <Scrollbar autoHide={false}>
        <Stack spacing={2} direction="row" justifyContent="space-between" divider={<Divider orientation="vertical" flexItem />}>
          {LIST.map((item, index) => <Box padding={3} flex={1} minWidth={200} key={index}>
              <FlexBox alignItems="center" gap={1} mb={1}>
                <Box width={10} height={10} flexShrink={0} borderRadius="50%" bgcolor={item.color} />

                <H6 fontSize={14}>{item.title}</H6>
              </FlexBox>

              {item.element.map((li, index) => <FlexBetween pt={3} key={index}>
                  <Paragraph fontWeight={500}>
                    <Span mr={1} color={item.color}>
                      {li.value}
                    </Span>{' '}
                    {li.name}
                  </Paragraph>

                  <Paragraph fontWeight={500}>{li.progress}%</Paragraph>
                </FlexBetween>)}
            </Box>)}
        </Stack>
      </Scrollbar>
    </Card>;
}