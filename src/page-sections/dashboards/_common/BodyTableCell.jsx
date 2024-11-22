// MUI
import TableCell from '@mui/material/TableCell';
import styled from '@mui/material/styles/styled'; // STYLED COMPONENT

const StyledTableCell = styled(TableCell)(({
  theme
}) => ({
  fontWeight: 500,
  padding: '.75rem 0',
  borderTop: `1px dashed ${theme.palette.divider}`,
  ':first-of-type': {
    paddingLeft: 24
  }
})); // ==============================================================

// ==============================================================
export default function BodyTableCell({
  children,
  ...props
}) {
  return <StyledTableCell {...props}>{children}</StyledTableCell>;
}