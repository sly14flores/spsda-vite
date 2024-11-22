import InputBase from '@mui/material/InputBase';
import styled from '@mui/material/styles/styled'; // STYLED COMPONENT

export const StyledInputBase = styled(InputBase, {
  shouldForwardProp: prop => prop !== 'border'
})(({
  theme,
  border
}) => ({
  height: 45,
  fontSize: 14,
  width: '100%',
  maxWidth: 350,
  borderRadius: 12,
  paddingInline: 16,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  border: border ? `1px solid ${theme.palette.divider}` : 'none',
  [theme.breakpoints.down(500)]: {
    maxWidth: '100%'
  },
  '::placeholder': {
    color: theme.palette.text.secondary
  }
}));