// MUI
import TableCell from '@mui/material/TableCell';
import styled from '@mui/material/styles/styled'; // STYLED COMPONENT

const StyledTableCell = styled(TableCell)({
  paddingBottom: 16,
  textTransform: 'uppercase',
  ':first-of-type': {
    paddingLeft: 24
  }
}); // ==============================================================

// ==============================================================
export default function HeadTableCell({
  children,
  ...props
}) {
  return <StyledTableCell {...props}>{children}</StyledTableCell>;
}