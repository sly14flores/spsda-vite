import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph, Span } from '@/components/typography'; // STYLED COMPONENT

import { Text } from './styles';
export default function IncomingMsg() {
  return <Box maxWidth={{
    md: '60%',
    sm: '70%',
    xs: '80%'
  }}>
      <FlexBox alignItems="center" mb={1} gap={1.5}>
        <Avatar src="/static/user/user-19.png" sx={{
        width: 27,
        height: 27
      }} />

        <Paragraph fontWeight={600} lineHeight={1}>
          Aiony Haust{' '}
          <Span ml={0.5} fontSize={12} fontWeight={400} color="text.secondary">
            11:29 AM
          </Span>
        </Paragraph>
      </FlexBox>

      <Text>
        Apple Business Chat, or Business Chat, allows customers to interact with a business.
      </Text>
    </Box>;
}