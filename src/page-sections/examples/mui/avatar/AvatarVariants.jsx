import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip'; // MUI ICON COMPONENT

import Folder from '@mui/icons-material/Folder';
export default function AvatarVariants() {
  return <Stack direction="row" spacing={2} justifyContent="center">
      <Tooltip title="Circular">
        <Avatar variant="circular">
          <Folder />
        </Avatar>
      </Tooltip>

      <Tooltip title="Bordered">
        <Avatar variant="bordered" src="/static/user/avatar.png" />
      </Tooltip>

      <Tooltip title="Square">
        <Avatar variant="square">
          <Folder />
        </Avatar>
      </Tooltip>

      <Tooltip title="Rounded">
        <Avatar variant="rounded">
          <Folder />
        </Avatar>
      </Tooltip>
    </Stack>;
}