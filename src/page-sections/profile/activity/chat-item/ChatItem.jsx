import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar'; // CUSTOM COMPONENTS

import ListItem from './ListItem';
import ItemLayout from '../ItemLayout';
import { Paragraph, Small } from '@/components/typography'; // CUSTOM ICON COMPONENT

import Chat from '@/icons/Chat';
export default function ChatItem() {
  return <ItemLayout Icon={<Chat sx={{
    fontSize: 16
  }} />}>
      <Paragraph fontWeight={600} mb={0.5}>
        There are 2 new tasks for you in Alphp Plus project:
      </Paragraph>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Small color="text.secondary">Added at 4.23 PM by</Small>
        <Avatar src="/static/user/user-11.png" sx={{
        width: 17,
        height: 17
      }} />
      </Stack>

      <ListItem title="Meeting with customer" status="In Progress" />
      <ListItem title="Project Delivery" status="Complete" />
    </ItemLayout>;
}