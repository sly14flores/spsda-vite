import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack'; // MUI ICON COMPONENTS

import AttachMoney from '@mui/icons-material/AttachMoney';
import RoomOutlined from '@mui/icons-material/RoomOutlined';
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import AccessTimeOutlined from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlined from '@mui/icons-material/CalendarMonthOutlined'; // CUSTOM COMPONENTS

import Item from './Item';
import { H6 } from '@/components/typography';
export default function Overview() {
  return <Card sx={{
    padding: '1.5rem',
    width: '100%',
    position: 'sticky',
    top: 20
  }}>
      <H6 fontSize={20} mb={3}>
        Job Overview
      </H6>

      <Stack spacing={2}>
        <Item Icon={CalendarMonthOutlined} title="Date Posted" description="2 days ago" />
        <Item Icon={AccessTimeOutlined} title="Expiration date" description="August 30, 2023" />
        <Item Icon={RoomOutlined} title="Location" description="Subidbazar, Sylhet, Bangladesh" />
        <Item Icon={PersonOutlined} title="Job Title" description="UI and UX Designer" />
        <Item Icon={AttachMoney} title="Rate" description="$21 - $40 / hour" />
      </Stack>
    </Card>;
}