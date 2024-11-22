import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase'; // MUI ICON COMPONENTS

import Info from '@mui/icons-material/Info';
import Warning from '@mui/icons-material/Warning';
import CheckCircle from '@mui/icons-material/CheckCircle';
export default function ActionAlert() {
  return <Stack spacing={3}>
      <Alert severity="info" icon={<Info />} action={<Stack className="btn-group" direction="row">
            <ButtonBase>UNDO</ButtonBase>
            <ButtonBase>Action</ButtonBase>
          </Stack>}>
        This is an primary alert — check it out!
      </Alert>

      <Alert severity="success" variant="outlined" icon={<CheckCircle />} action={<Stack className="btn-group" direction="row">
            <ButtonBase>UNDO</ButtonBase>
            <ButtonBase>Action</ButtonBase>
          </Stack>}>
        This is a success alert — check it out!
      </Alert>

      <Alert severity="warning" variant="filled" icon={<Warning />} action={<Stack className="btn-group" direction="row">
            <ButtonBase>UNDO</ButtonBase>
            <ButtonBase>Action</ButtonBase>
          </Stack>}>
        This is a warning alert — check it out!
      </Alert>
    </Stack>;
}