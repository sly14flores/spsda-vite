import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants';
export const ProgressWrapper = styled('div')(({
  theme
}) => ({
  gap: '2rem',
  display: 'flex',
  marginBlock: '3rem',
  alignItems: 'center',
  '& .CircularProgressbar': {
    '.CircularProgressbar-path': {
      stroke: theme.palette.grey[500]
    },
    '.CircularProgressbar-trail': {
      stroke: theme.palette.grey[200]
    },
    '.CircularProgressbar-text': {
      fontWeight: 600,
      fontFamily: theme.typography.fontFamily,
      fill: theme.palette.grey[isDark(theme) ? 300 : 900]
    }
  }
}));
export const ImageWrapper = styled('div')(({
  theme
}) => ({
  display: 'flex',
  alignItems: 'end',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap'
  },
  '& img': {
    borderRadius: theme.spacing(2)
  }
}));