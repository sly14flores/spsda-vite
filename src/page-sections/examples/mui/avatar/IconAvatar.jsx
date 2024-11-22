import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip'; // MUI ICON COMPONENT

import Folder from '@mui/icons-material/Folder';
export default function IconAvatar() {
  return <Stack direction="row" spacing={2} justifyContent="center">
      <Tooltip title="Default">
        <Avatar>
          <Folder />
        </Avatar>
      </Tooltip>

      <Tooltip title="Primary">
        <Avatar sx={{
        bgcolor: 'primary.main'
      }}>
          <Folder />
        </Avatar>
      </Tooltip>

      <Tooltip title="Warning">
        <Avatar sx={{
        bgcolor: 'warning.main'
      }}>
          <Folder />
        </Avatar>
      </Tooltip>

      <Tooltip title="Success">
        <Avatar sx={{
        bgcolor: 'success.main'
      }}>
          <Folder />
        </Avatar>
      </Tooltip>

      <Tooltip title="Error">
        <Avatar sx={{
        bgcolor: 'error.main'
      }}>
          <Folder />
        </Avatar>
      </Tooltip>

      <Tooltip title="Info">
        <Avatar sx={{
        bgcolor: 'info.main'
      }}>
          <Folder />
        </Avatar>
      </Tooltip>
    </Stack>;
}