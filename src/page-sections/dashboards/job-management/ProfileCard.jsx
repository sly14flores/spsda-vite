import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'; // MUI ICON COMPONENTS

import MoreHoriz from '@mui/icons-material/MoreHoriz'; // CUSTOM COMPONENTS

import Link from '@/components/link/Link';
import { H6, Paragraph } from '@/components/typography';
import { FlexBox, FlexBetween, FlexRowAlign } from '@/components/flexbox'; // CUSTOM ICON COMPONENTS

import MapMarkerIcon from '@/icons/MapMarkerIcon';
export default function ProfileCard() {
  return <Card className="p-3 h-full">
      <FlexRowAlign flexDirection="column" gap={1.5}>
        <Avatar src="/static/user/user-11.png" sx={{
        width: 60,
        height: 60
      }} />

        <Chip label="Pro" size="small" />

        <div>
          <H6 fontSize={16}>Nabed Khan</H6>

          <Paragraph fontSize={12} fontWeight={500} color="text.secondary">
            UI / UX Designer
          </Paragraph>
        </div>

        <FlexBox gap={0.5} alignItems="center">
          <MapMarkerIcon color="primary" />
          <Paragraph fontSize={12} fontWeight={600} color="primary.main">
            New York, US
          </Paragraph>
        </FlexBox>
      </FlexRowAlign>

      <FlexBetween mt={4}>
        <H6 fontSize={14}>Recent Job Posted</H6>
        <Link href="#">View all</Link>
      </FlexBetween>

      {['Sr. Android Developer', 'UI / UX Designer'].map((item, i) => <FlexBetween mt={2} key={item}>
          <FlexBox alignItems="center" gap={2}>
            <FlexRowAlign sx={{
          width: 55,
          height: 55,
          borderRadius: '4px',
          backgroundColor: 'primary.50'
        }}>
              <H6 fontSize={28} color="primary.main">
                {95 + i}
              </H6>
            </FlexRowAlign>

            <div>
              <H6 fontSize={14}>{item}</H6>
              <Paragraph color="text.secondary">Total Applications</Paragraph>
            </div>
          </FlexBox>

          <IconButton>
            <MoreHoriz fontSize="small" />
          </IconButton>
        </FlexBetween>)}

      <FlexBetween mt={4} gap={3}>
        <Button fullWidth variant="outlined">
          Message
        </Button>

        <Button fullWidth variant="contained">
          Connect
        </Button>
      </FlexBetween>
    </Card>;
}