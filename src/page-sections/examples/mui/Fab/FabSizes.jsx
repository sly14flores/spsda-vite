import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Add from '@mui/icons-material/Add';
export default function FabSizes() {
  return <Stack alignItems="center" direction="row" flexWrap="wrap" gap={3}>
      <Fab size="small" variant="extended" color="primary" aria-label="add">
        <Add /> Small
      </Fab>

      <Fab size="medium" variant="extended" color="primary" aria-label="add">
        <Add /> Medium
      </Fab>

      <Fab size="large" variant="extended" color="primary" aria-label="add">
        <Add /> Large
      </Fab>

      <Fab size="small" color="primary" aria-label="add">
        <Add />
      </Fab>

      <Fab size="medium" color="primary" aria-label="add">
        <Add />
      </Fab>

      <Fab size="large" color="primary" aria-label="add">
        <Add />
      </Fab>
    </Stack>;
}