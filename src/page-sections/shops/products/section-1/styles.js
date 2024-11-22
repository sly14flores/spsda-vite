import styled from '@mui/material/styles/styled';
export const StyledRoot = styled('div')(({
  theme
}) => ({
  marginTop: '5rem',
  paddingBottom: '10rem',
  '& .description': {
    fontSize: 18,
    fontWeight: 500,
    textAlign: 'center',
    color: theme.palette.common.white
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '3rem',
    paddingBottom: '6rem',
    '& .description': {
      fontSize: 16
    }
  }
}));