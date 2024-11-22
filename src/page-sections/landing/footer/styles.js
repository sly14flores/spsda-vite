import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants';
export const HeaderTop = styled('div')(({
  theme
}) => ({
  backgroundColor: '#1C113D',
  '.MuiContainer-root': {
    position: 'relative'
  },
  '.buy-btn': {
    backgroundColor: 'white',
    color: theme.palette.grey[900],
    ':hover': {
      backgroundColor: '#eee'
    }
  },
  '.preview-btn': {
    borderColor: 'white',
    color: 'white'
  },
  '.illustration': {
    right: 0,
    bottom: 0,
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));
export const TicketWrapper = styled('div')(({
  theme
}) => ({
  zIndex: 1,
  marginTop: '-5rem',
  textAlign: 'center',
  position: 'relative',
  borderRadius: '1rem',
  padding: '2.5rem 2rem',
  boxShadow: theme.shadows[2],
  backgroundColor: isDark(theme) ? theme.palette.grey[800] : 'white'
}));