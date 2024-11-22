import styled from '@mui/material/styles/styled'; // STYLED COMPONENT

export const Dot = styled('div')(({
  theme
}) => ({
  width: 8,
  height: 8,
  flexShrink: 0,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main
}));
export const FormWrapper = styled('div')({
  padding: '1.5rem'
});