import Card from '@mui/material/Card';
import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENTS

export const StyledRoot = styled(Card)(({
  theme
}) => ({
  padding: '1.25rem 1.75rem',
  '.add-btn': {
    border: `1px solid ${theme.palette.divider}`
  },
  '& .MuiAvatarGroup-avatar': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 300]
  },
  '& .content': {
    cursor: 'pointer',
    textAlign: 'center',
    paddingTop: '3rem ',
    paddingBottom: '2rem '
  }
}));