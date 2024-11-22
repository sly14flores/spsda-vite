import styled from '@mui/material/styles/styled';
export const MainContent = styled('div')(({
  theme
}) => ({
  textAlign: 'center',
  paddingBlock: '3rem',
  '& p': {
    fontSize: 18,
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  '& .img-wrapper': {
    maxWidth: 600,
    margin: 'auto',
    paddingBlock: '4rem',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 300,
      paddingBlock: '3rem'
    }
  }
}));