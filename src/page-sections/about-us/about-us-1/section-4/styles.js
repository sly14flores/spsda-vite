import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants';
export const StyledRoot = styled('div')(({
  theme
}) => ({
  paddingBlock: '5rem',
  marginBottom: '6rem',
  backgroundColor: theme.palette.grey[isDark(theme) ? 800 : 50],
  [theme.breakpoints.down('sm')]: {
    paddingBlock: '3rem'
  }
}));
export const TestimonialItem = styled('div')(({
  theme
}) => ({
  padding: '1rem',
  textAlign: 'center',
  '& .quotation': {
    display: 'inline-block'
  },
  '& .review-text': {
    maxWidth: 700,
    margin: 'auto',
    fontSize: 18,
    fontWeight: 500,
    marginTop: '1rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  '& .reviewer-img': {
    width: 100,
    height: 100,
    margin: 'auto',
    borderRadius: '50%',
    marginBottom: '2rem',
    boxShadow: theme.shadows[2]
  }
}));