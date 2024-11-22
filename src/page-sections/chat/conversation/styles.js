import { styled, IconButton } from '@mui/material'; // STYLED COMPONENTS

export const ToggleBtn = styled('div', {
  shouldForwardProp: prop => prop !== 'screen'
})(({
  theme,
  screen = 'md'
}) => ({
  left: 0,
  top: 20,
  zIndex: 1,
  padding: 5,
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  position: 'absolute',
  justifyContent: 'center',
  borderRadius: '0 8px 8px 0',
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up(screen)]: {
    display: 'none'
  }
}));
export const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  color: theme.palette.grey[400],
  backgroundColor: theme.palette.grey[50],
  border: `1px solid ${theme.palette.grey[200]}`
}));
export const AttachButton = styled('div')(({
  theme
}) => ({
  width: 36,
  height: 36,
  fontSize: 18,
  display: 'flex',
  cursor: 'pointer',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.grey[400],
  backgroundColor: theme.palette.grey[50],
  border: `1px solid ${theme.palette.grey[200]}`
}));