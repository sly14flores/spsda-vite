import Card from '@mui/material/Card';
import AvatarGroup from '@mui/material/AvatarGroup';
import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENTS

export const StyledAvatarGroup = styled(AvatarGroup)(({
  theme
}) => ({
  justifyContent: 'flex-end',
  '& .MuiAvatarGroup-avatar': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 300]
  }
}));
export const StyledRoot = styled(Card)(({
  theme
}) => ({
  padding: '1.25rem 1.75rem',
  '.add-btn': {
    border: `1px solid ${theme.palette.divider}`
  }
}));