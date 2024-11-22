import InputBase from '@mui/material/InputBase';
import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants';
export const EarningBox = styled('div')(({
  theme
}) => ({
  paddingBlock: 12,
  textAlign: 'center',
  borderRadius: '8px',
  border: `1px solid ${theme.palette.divider}`
}));
export const StyledInputBase = styled(InputBase)(({
  theme
}) => ({
  fontSize: 12,
  fontWeight: 500,
  borderRadius: 8,
  padding: '.5rem 1rem',
  backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100],
  '.MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: theme.palette.grey[500]
  }
}));