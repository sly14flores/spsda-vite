import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack'; // CUSTOM COMPONENTS

import ListItem from './ListItem';
import { H6 } from '@/components/typography';
export default function MyConnections() {
  return <Card className="p-3">
      <H6 fontSize={16}>My Connections</H6>

      <Stack spacing={3} mt={3}>
        <ListItem name="Martha Hawk" position="Developer" imageUrl="/static/user/user-11.png" />
        <ListItem name="Smantha Hoopes" position="Developer" imageUrl="/static/user/user-11.png" />
        <ListItem name="Chris Pine" position="Developer" imageUrl="/static/user/user-11.png" />
        <ListItem name="Sun Myi" position="Developer" imageUrl="/static/user/user-11.png" />
      </Stack>
    </Card>;
}