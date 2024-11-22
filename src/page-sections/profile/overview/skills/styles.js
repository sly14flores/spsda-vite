import ButtonBase from '@mui/material/ButtonBase';
import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENTS

export const ButtonOne = styled(ButtonBase)(({
  theme
}) => ({
  fontSize: 14,
  width: '100%',
  cursor: 'auto',
  fontWeight: 500,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  padding: '.8rem 1rem',
  textOverflow: 'ellipsis',
  borderRadius: '8px 0 0 8px',
  backgroundColor: theme.palette.grey[isDark(theme) ? 600 : 100]
}));
export const ButtonTwo = styled(ButtonBase)(({
  theme
}) => ({
  fontSize: 14,
  cursor: 'auto',
  fontWeight: 600,
  padding: '.8rem 1rem',
  borderRadius: '0 8px 8px 0',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.divider
}));