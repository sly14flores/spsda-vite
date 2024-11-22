import styled from '@mui/material/styles/styled';
export const Text = styled('div')(({
  theme
}) => ({
  fontSize: 14,
  color: 'white',
  textAlign: 'right',
  marginLeft: '2.5rem',
  padding: '1rem 1.5rem',
  borderRadius: '0px 1rem 1rem 1rem',
  backgroundColor: theme.palette.primary.main
}));