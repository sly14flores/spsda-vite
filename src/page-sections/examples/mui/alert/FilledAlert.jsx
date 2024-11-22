import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack'; // MUI ICON COMPONENTS

import Info from '@mui/icons-material/Info';
import Error from '@mui/icons-material/Error';
import Warning from '@mui/icons-material/Warning';
import CheckCircle from '@mui/icons-material/CheckCircle';
export default function FilledAlert() {
  return <Stack spacing={3}>
      <Alert severity="info" variant="filled" onClose={() => {}} icon={<Info />}>
        This is an primary alert — check it out!
      </Alert>

      <Alert severity="success" variant="filled" onClose={() => {}} icon={<CheckCircle />}>
        This is a success alert — check it out!
      </Alert>

      <Alert severity="warning" variant="filled" onClose={() => {}} icon={<Warning />}>
        This is a warning alert — check it out!
      </Alert>

      <Alert severity="error" variant="filled" onClose={() => {}} icon={<Error />}>
        This is an error alert — check it out!
      </Alert>
    </Stack>;
}