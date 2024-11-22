import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider'; // CUSTOM COMPONENTS

import { H6, Paragraph, Small } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM DUMMY DATA SET

import { ACCOUNT_LIST } from './data';
export default function SocialAccounts() {
  return <Card sx={{
    pb: 2
  }}>
      <H6 fontSize={14} p={3}>
        Social Account
      </H6>

      <Divider />

      {ACCOUNT_LIST.map(({
      id,
      body,
      connect,
      image,
      title
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
              <Paragraph fontWeight={500} lineHeight={1}>
                {title}
              </Paragraph>
              <Small color="text.secondary">{body}</Small>
            </div>
          </FlexBox>

          <Button color={connect ? 'primary' : 'secondary'} variant={connect ? 'contained' : 'outlined'}>
            {connect ? 'Connect' : 'Disconnect'}
          </Button>
        </FlexBetween>)}
    </Card>;
}