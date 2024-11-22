import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'; // ==============================================================

// ==============================================================
export default function CheckboxLabel({
  label,
  ...props
}) {
  return <FormControlLabel label={label} control={<Checkbox size="small" {...props} />} slotProps={{
    typography: {
      fontSize: 14
    }
  }} />;
}