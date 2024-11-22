import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles'; // ==============================================================

// ==============================================================
// STYLED COMPONENT
export const StyledBadge = styled(Badge, {
  shouldForwardProp: prop => prop !== 'width' && prop !== 'height'
})(({
  theme,
  width,
  height
}) => ({
  '& .MuiBadge-badge': {
    width: width,
    height: height,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
  },
  '& .MuiBadge-colorSuccess.MuiBadge-badge': {
    backgroundColor: theme.palette.success.main,
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`
  }
}));