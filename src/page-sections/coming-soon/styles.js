import styled from '@mui/material/styles/styled';
export const MainContent = styled('div')(({
  theme
}) => ({
  textAlign: 'center',
  paddingBlock: '3rem',
  '& .img-wrapper': {
    maxWidth: 500,
    margin: 'auto',
    paddingBlock: '6rem',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 300,
      paddingBlock: '3rem'
    }
  },
  '& .MuiTextField-root': {
    width: '100%',
    maxWidth: 500,
    '& .MuiButtonBase-root': {
      flexBasis: 120
    },
    '& .MuiInputBase-root': {
      padding: '4px 8px 4px 0'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400
    }
  }
}));