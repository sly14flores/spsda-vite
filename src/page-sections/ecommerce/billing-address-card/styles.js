import Card from '@mui/material/Card';
import styled from '@mui/material/styles/styled';
export const StyledCard = styled(Card, {
  shouldForwardProp: prop => prop !== 'selected'
})(({
  theme,
  selected
}) => ({
  padding: '1rem',
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: `1px solid ${selected ? theme.palette.primary.main : 'transparent'}`,
  '& .place': {
    gap: 8,
    marginBottom: 8,
    display: 'flex',
    alignItems: 'center',
    color: selected ? theme.palette.primary.main : theme.palette.text.secondary
  },
  '& .check-mark': {
    padding: '.5rem',
    color: theme.palette.primary.main
  }
}));