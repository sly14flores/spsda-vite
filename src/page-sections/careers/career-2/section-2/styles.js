import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENT

export const StyledContainer = styled(Container)(({
  theme
}) => ({
  paddingBlock: '5rem',
  '& .heading': {
    textAlign: 'center',
    marginBottom: '3rem',
    '& > p': {
      fontSize: 18,
      color: theme.palette.text.secondary
    }
  }
}));
export const StyledCard = styled(Card)(({
  theme
}) => ({
  padding: '1.5rem',
  transition: 'all 300ms',
  boxShadow: theme.shadows[0],
  border: `1px solid ${theme.palette.grey[isDark(theme) ? 700 : 100]}`,
  '&:hover': {
    boxShadow: theme.shadows[4],
    borderColor: theme.palette.primary.main
  },
  '& .title': {
    fontSize: 21,
    fontWeight: 500,
    marginBottom: '1rem'
  },
  '& .description': {
    marginBottom: '3rem',
    color: theme.palette.text.secondary
  }
}));