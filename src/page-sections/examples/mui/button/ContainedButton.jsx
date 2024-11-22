import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function ContainedButton() {
  return <Stack direction="row" flexWrap="wrap" gap={3}>
      <Button variant="contained" color="inherit">
        Default
      </Button>

      <Button variant="contained" color="primary">
        Primary
      </Button>

      <Button variant="contained" color="secondary">
        Secondary
      </Button>

      <Button variant="contained" color="warning">
        Warning
      </Button>

      <Button variant="contained" color="error">
        Error
      </Button>

      <Button variant="contained" color="success">
        Success
      </Button>
    </Stack>;
}