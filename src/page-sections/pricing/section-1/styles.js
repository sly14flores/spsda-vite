import styled from '@mui/material/styles/styled';
export const StyledRoot = styled('div')(({
  theme
}) => ({
  color: 'white',
  paddingTop: '5rem',
  textAlign: 'center',
  paddingBottom: '12rem',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '2rem'
  },
  [theme.breakpoints.down(425)]: {
    '& br': {
      display: 'none'
    }
  },
  '& .title': {
    fontSize: 48,
    fontWeight: 600,
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: 36
    }
  },
  '& .price-navigator': {
    gap: '1rem',
    display: 'flex',
    paddingTop: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    '& > p': {
      fontWeight: 500
    },
    [theme.breakpoints.down(375)]: {
      flexDirection: 'column',
      gap: '.5rem'
    }
  }
}));