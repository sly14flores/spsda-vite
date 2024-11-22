import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import { FlexBetween, FlexBox } from '@/components/flexbox';
import { H6, Paragraph, Small } from '@/components/typography'; // CUSTOM DUMMY DATA SET

import { ACCOUNT_LIST } from './data';
export default function ConnectedAccounts() {
  return <Card sx={{
    pb: 2
  }}>
      <Box padding={3}>
        <H6 fontSize={14}>Connected accounts</H6>
        <Small color="text.secondary">
          Two-factor authentication adds to log in, in you'll need to provide a 4 digit amazing
          code. <Link href="#">Learn More</Link>
        </Small>
      </Box>

      <Divider />

      {ACCOUNT_LIST.map(({
      id,
      title,
      body,
      image
    }) => <FlexBetween key={id} sx={{
      borderBottom: 1,
      padding: '1rem 1.5rem',
      borderColor: 'divider',
      '&:last-of-type': {
        borderBottom: 0
      }
    }}>
          <FlexBox alignItems="center" gap={2}>
            <Avatar src={image} />

            <div>
              <Paragraph fontWeight={500} fontSize={14}>
                {title}
              </Paragraph>

              <Small color="text.secondary" mt={0.3}>
                {body}
              </Small>
            </div>
          </FlexBox>

          <Switch defaultChecked />
        </FlexBetween>)}
    </Card>;
}