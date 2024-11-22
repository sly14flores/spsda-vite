import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENT

export const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  flexShrink: 0,
  color: theme.palette.grey[isDark(theme) ? 300 : 400]
}));