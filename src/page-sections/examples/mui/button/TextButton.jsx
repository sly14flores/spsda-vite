import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function TextButton() {
  return <Stack direction="row" flexWrap="wrap" gap={3}>
      <Button variant="text" color="inherit">
        Default
      </Button>

      <Button variant="text" color="primary">
        Primary
      </Button>

      <Button variant="text" color="secondary">
        Secondary
      </Button>

      <Button variant="text" color="warning">
        Warning
      </Button>

      <Button variant="text" color="error">
        Error
      </Button>

      <Button variant="text" color="success">
        Success
      </Button>
    </Stack>;
}