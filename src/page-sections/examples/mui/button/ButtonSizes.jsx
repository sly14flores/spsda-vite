import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function ButtonSizes() {
  return <Stack alignItems="center" direction="row" flexWrap="wrap" gap={3}>
      <Button size="large" variant="contained" color="primary">
        Large
      </Button>

      <Button size="medium" variant="contained" color="primary">
        Medium
      </Button>

      <Button size="small" variant="contained" color="primary">
        Small
      </Button>
    </Stack>;
}