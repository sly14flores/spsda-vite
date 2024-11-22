import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Add from '@mui/icons-material/Add';
export default function DefaultFab() {
  return <Stack direction="row" flexWrap="wrap" gap={3}>
      <Fab color="primary" aria-label="add">
        <Add />
      </Fab>

      <Fab color="secondary" aria-label="add">
        <Add />
      </Fab>

      <Fab color="warning" aria-label="add">
        <Add />
      </Fab>

      <Fab color="error" aria-label="add">
        <Add />
      </Fab>

      <Fab color="success" aria-label="add">
        <Add />
      </Fab>

      <Fab color="default" aria-label="add">
        <Add />
      </Fab>
    </Stack>;
}