import TextField from '@mui/material/TextField';
import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENT

export const StyledRoot = styled('div')(({
  theme
}) => ({
  marginBottom: '6rem',
  paddingBlock: '6rem',
  backgroundColor: theme.palette.grey[isDark(theme) ? 800 : 50],
  '& .i-frame': {
    border: 0,
    padding: 3,
    borderRadius: 16,
    display: 'block !important'
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '3rem',
    paddingBlock: '3rem'
  }
}));
export const StyledTextField = styled(TextField)(({
  theme
}) => ({ ...(theme.palette.mode === 'light' && {
    '.MuiOutlinedInput-root': {
      backgroundColor: 'white'
    }
  })
}));