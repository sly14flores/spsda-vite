import Stack from '@mui/material/Stack';
import styled from '@mui/material/styles/styled';
export const StyledStack = styled(Stack)(({
  theme
}) => ({
  minWidth: 750,
  marginTop: '1rem',
  borderRadius: '1rem',
  padding: '.7rem 1rem',
  border: `1px solid ${theme.palette.divider}`
}));