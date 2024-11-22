import styled from '@mui/material/styles/styled';
export const StyledFancyText = styled('span')(({
  theme
}) => ({
  background: 'linear-gradient(90deg, #6950E8 21.75%, #FA03AA 73.2%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}));