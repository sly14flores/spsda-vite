import TextField from '@mui/material/TextField';
import styled from '@mui/material/styles/styled'; // STYLED COMPONENTS

export const ContentWrapper = styled('div')(({
  theme
}) => ({
  gap: 16,
  display: 'grid',
  paddingTop: '2rem',
  alignItems: 'center',
  gridTemplateColumns: '1fr 1fr',
  '& .img-wrapper': {
    textAlign: 'center',
    '& img': {
      maxWidth: '100%',
      display: 'block'
    }
  },
  '& .title': {
    fontSize: 42,
    color: 'white',
    marginBottom: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: 36
    },
    [theme.breakpoints.down(425)]: {
      maxWidth: 215,
      lineHeight: 1.2,
      marginInline: 'auto'
    }
  },
  [theme.breakpoints.down('md')]: {
    gap: 32,
    gridTemplateColumns: '1fr',
    '& .content': {
      textAlign: 'center'
    }
  }
}));
export const StyledTextField = styled(TextField)(({
  theme
}) => ({
  maxWidth: 425,
  width: '100%',
  ...(theme.palette.mode === 'light' && {
    '& .MuiInputBase-input': {
      color: theme.palette.grey[400]
    },
    '& .MuiInputBase-input::placeholder': {
      color: theme.palette.grey[500]
    }
  })
}));