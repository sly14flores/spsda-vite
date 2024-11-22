import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; // MUI ICON COMPONENT

import Add from '@mui/icons-material/Add';
export default function WithIconButton() {
  return <Stack direction="row" flexWrap="wrap" gap={3}>
      <Button color="primary" startIcon={<Add />}>
        Icon Start
      </Button>

      <Button variant="outlined" endIcon={<Add />}>
        Icon End
      </Button>

      <Button variant="text" endIcon={<Add />}>
        Icon End With Text
      </Button>
    </Stack>;
}