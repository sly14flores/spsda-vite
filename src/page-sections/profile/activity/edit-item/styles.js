import Stack from '@mui/material/Stack';
import styled from '@mui/material/styles/styled';
export const ImageGroup = styled(Stack)(({
  theme
}) => ({
  padding: '1rem',
  marginTop: '1rem',
  borderRadius: '1rem',
  border: `1px solid ${theme.palette.divider}`,
  '.img-box': {
    width: 235,
    display: 'flex'
  }
}));