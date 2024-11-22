import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar'; // CUSTOM COMPONENTS

import { Paragraph } from '@/components/typography'; // CUSTOM ICON COMPONENT

import { StyledAvatarGroup, StyledRoot } from './styles'; // ======================================================================

// ======================================================================
export default function ListItem({
  title,
  status
}) {
  return <StyledRoot>
      <Paragraph>{title}</Paragraph>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Chip label="Application" color="secondary" sx={{
        borderRadius: 4
      }} />

        <StyledAvatarGroup max={4}>
          <Avatar src="/static/user/user-11.png" />
          <Avatar src="/static/user/user-10.png" />
          <Avatar src="/static/user/user-9.png" />
          <Avatar src="/static/user/user-8.png" />
          <Avatar src="/static/user/user-7.png" />
        </StyledAvatarGroup>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Button size="small" color={status === 'Complete' ? 'success' : 'primary'} sx={{
        py: 0.3
      }}>
          {status}
        </Button>

        <Button size="small" variant="outlined" color="secondary" sx={{
        py: 0.3
      }}>
          View
        </Button>
      </Stack>
    </StyledRoot>;
}