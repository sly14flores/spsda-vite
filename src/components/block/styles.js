import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants';
export const StyledCard = styled(Card, {
  shouldForwardProp: prop => prop !== 'bg'
})(({
  theme,
  bg
}) => ({
  padding: 32,
  borderRadius: 12,
  boxShadow: theme.shadows[0],
  border: `1px dashed ${theme.palette.grey[isDark(theme) ? 600 : 200]}`,
  backgroundColor: bg ? 'transparent' : theme.palette.grey[isDark(theme) ? 800 : 50]
}));