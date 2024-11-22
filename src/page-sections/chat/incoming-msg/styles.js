import styled from '@mui/material/styles/styled';
import { isDark } from '@/utils/constants';
export const Text = styled('div')(({
  theme
}) => ({
  fontSize: 14,
  marginLeft: '2.5rem',
  padding: '1rem 1.5rem',
  borderRadius: '0px 1rem 1rem 1rem',
  backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100]
}));