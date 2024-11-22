import ButtonBase from '@mui/material/ButtonBase';
import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants';
// STYLED COMPONENTS
const StyledButton = styled(ButtonBase, {
  shouldForwardProp: prop => prop !== 'active'
})(({
  theme,
  active
}) => ({
  fontSize: 14,
  fontWeight: 600,
  borderRadius: 8,
  padding: '.5rem 1rem',
  color: theme.palette.grey[500],
  ...(active && {
    color: theme.palette.primary.main,
    backgroundColor: isDark(theme) ? theme.palette.grey[600] : 'white'
  })
})); // ==============================================================

// ==============================================================
export default function TabButton({
  active,
  handleChange,
  title
}) {
  return <StyledButton disableRipple onClick={handleChange(title)} active={active === title ? 1 : 0}>
      {title}
    </StyledButton>;
}