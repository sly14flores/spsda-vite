import styled from '@mui/material/styles/styled';
import Card from '@mui/material/Card';
export const StyledRoot = styled(Card)(({
  theme
}) => ({
  gap: '1rem',
  display: 'flex',
  flexWrap: 'wrap',
  padding: '1.5rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .title': {
    gap: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  '& .tags': {
    gap: '0.5rem',
    maxWidth: 500,
    display: 'flex',
    flexWrap: 'wrap'
  }
}));