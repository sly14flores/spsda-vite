import TableCell from '@mui/material/TableCell';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENTS

export const StyledFormControl = styled(FormControlLabel)(({
  theme
}) => ({
  '& .MuiTypography-root': {
    fontSize: 14,
    fontWeight: 600,
    color: theme.palette.text.secondary
  },
  ':has(.Mui-checked) .MuiTypography-root': {
    color: theme.palette.text.primary
  }
}));
export const StatusWrapper = styled('div')(({
  theme
}) => ({
  display: 'flex',
  marginBottom: 30,
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down(750)]: {
    '& .MuiFormGroup-root': {
      marginBottom: 10
    }
  }
}));
export const HeadTableCell = styled(TableCell)(({
  theme
}) => ({
  padding: 0,
  fontWeight: 400,
  paddingBottom: 5,
  color: theme.palette.text.secondary,
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:last-of-type': {
    textAlign: 'right'
  }
}));
export const BodyTableCell = styled(TableCell)(({
  theme
}) => ({
  padding: '10px 0',
  color: theme.palette.text.primary,
  '&:last-of-type': {
    textAlign: 'right',
    fontWeight: 500
  },
  '&:first-of-type': {
    fontWeight: 500
  }
}));
export const StyledBox = styled('div')(({
  theme
}) => ({
  padding: 24,
  height: '100%',
  borderRadius: 8,
  backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100]
}));