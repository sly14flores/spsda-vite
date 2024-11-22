import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph, Span } from '@/components/typography'; // STYLED COMPONENT

import { Text } from './styles';
export default function OutgoingMsg() {
  return <Box alignSelf="end" maxWidth={{
    md: '60%',
    sm: '70%',
    xs: '80%'
  }}>
      <FlexBox justifyContent="end" alignItems="center" mb={1} gap={1.5}>
        <Paragraph fontWeight={600} lineHeight={1}>
          <Span ml={0.5} fontSize={12} fontWeight={400} color="text.secondary">
            11:29 AM
          </Span>{' '}
          You
        </Paragraph>

        <Avatar src="/static/user/user-11.png" sx={{
        width: 27,
        height: 27
      }} />
      </FlexBox>

      <Text>Sure! Ready to help.</Text>
    </Box>;
}