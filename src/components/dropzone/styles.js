import styled from '@mui/material/styles/styled'; // STYLED COMPONENT

export const RootStyle = styled('div')(({
  theme
}) => ({
  padding: 32,
  borderRadius: 16,
  cursor: 'pointer',
  textAlign: 'center',
  border: `1px dashed ${theme.palette.grey[400]}`
}));