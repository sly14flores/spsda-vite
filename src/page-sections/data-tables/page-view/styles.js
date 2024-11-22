import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import styled from '@mui/material/styles/styled';
export const BodyTableRow = styled(TableRow, {
  shouldForwardProp: prop => prop !== 'selected_row'
})(({
  theme,
  selected_row
}) => ({ ...(selected_row && {
    position: 'relative',
    backgroundColor: theme.palette.action.selected,
    '&::after': {
      top: 0,
      left: 0,
      width: '3px',
      content: '""',
      height: '100%',
      position: 'absolute',
      backgroundColor: theme.palette.primary.main
    }
  })
}));
export const BodyTableCell = styled(TableCell)(({
  theme
}) => ({
  padding: '1rem',
  borderBottom: `1px solid ${theme.palette.divider}`,
  ':first-of-type': {
    paddingLeft: 16
  }
}));
export const HeadTableCell = styled(BodyTableCell)({
  ':last-of-type': {
    paddingRight: 16
  }
});