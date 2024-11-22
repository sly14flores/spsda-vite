import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
export default function OutlinedButtonGroup() {
  return <Stack direction="row" flexWrap="wrap" gap={3}>
      <ButtonGroup variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup color="secondary" variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup color="success" variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup color="warning" variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup color="error" variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>;
}