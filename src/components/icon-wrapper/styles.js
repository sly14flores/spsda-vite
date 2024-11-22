import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/system/colorManipulator'; // STYLED COMPONENT

export const Wrapper = styled(Box)(({
  theme
}) => ({
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  marginRight: '0.5rem',
  backgroundColor: alpha(theme.palette.primary.main, 0.1)
}));