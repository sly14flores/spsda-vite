import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENTS

export const ItemRoot = styled(Card)(() => ({
  borderRadius: 8,
  boxShadow: 'none',
  position: 'relative',
  '.text-group': {
    marginTop: '.75rem'
  },
  '.mr': {
    marginRight: 8
  }
}));
export const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`
}));
export const DateWrapper = styled('div')(({
  theme
}) => ({
  top: 10,
  right: 10,
  width: 40,
  height: 50,
  display: 'flex',
  borderRadius: '4px',
  alignItems: 'center',
  position: 'absolute',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: isDark(theme) ? theme.palette.grey[800] : theme.palette.common.white
}));