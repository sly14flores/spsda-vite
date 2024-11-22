import styled from '@mui/material/styles/styled';
import { Paragraph } from '@/components/typography'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants';
export const StyledRoot = styled('div')(({
  theme
}) => ({
  borderRadius: 12,
  padding: '2rem',
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.grey[isDark(theme) ? 800 : 100]
}));
export const StyledParagraph = styled(Paragraph)(({
  theme
}) => ({
  gap: 4,
  fontWeight: 500,
  display: 'flex',
  paddingTop: '1.5rem',
  paddingBottom: '.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.grey[isDark(theme) ? 800 : 100],
  '& .icon': {
    fontSize: 16,
    color: theme.palette.success.main
  }
}));