import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import styled from '@mui/material/styles/styled';
export const StyledCard = styled(Card)(() => ({
  display: 'flex',
  padding: '1.5rem',
  alignItems: 'center',
  flexDirection: 'column'
}));
export const StyledStack = styled(Stack)(({
  theme
}) => ({
  width: '47%',
  padding: '1rem',
  borderRadius: 12,
  marginTop: '1rem',
  alignItems: 'center',
  border: `1px solid ${theme.palette.divider}`,
  '.icon': {
    color: theme.palette.text.secondary
  }
}));