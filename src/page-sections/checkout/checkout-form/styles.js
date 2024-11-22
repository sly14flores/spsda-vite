import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENTS

export const StyledCard = styled(Card)(({
  theme
}) => ({
  padding: '1.5rem',
  boxShadow: theme.shadows[2],
  border: `1px solid ${theme.palette.grey[isDark(theme) ? 700 : 100]}`
}));
export const CardWrapper = styled(Box, {
  shouldForwardProp: prop => prop !== 'active'
})(({
  theme,
  active
}) => ({
  padding: 16,
  borderRadius: 8,
  cursor: 'pointer',
  border: `1px solid ${theme.palette.divider}`,
  ...(active && {
    boxShadow: theme.shadows[4],
    border: 0
  })
}));