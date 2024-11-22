import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
export default function LetterAvatar() {
  return <Stack direction="row" spacing={2} justifyContent="center">
      <Tooltip title="Default">
        <Avatar>A</Avatar>
      </Tooltip>

      <Tooltip title="Primary">
        <Avatar sx={{
        bgcolor: 'primary.main'
      }}>B</Avatar>
      </Tooltip>

      <Tooltip title="Warning">
        <Avatar sx={{
        bgcolor: 'warning.main'
      }}>C</Avatar>
      </Tooltip>

      <Tooltip title="Success">
        <Avatar sx={{
        bgcolor: 'success.main'
      }}>D</Avatar>
      </Tooltip>

      <Tooltip title="Error">
        <Avatar sx={{
        bgcolor: 'error.main'
      }}>E</Avatar>
      </Tooltip>

      <Tooltip title="Info">
        <Avatar sx={{
        bgcolor: 'info.main'
      }}>E</Avatar>
      </Tooltip>
    </Stack>;
}