import styled from '@mui/material/styles/styled';
import { isDark } from '@/utils/constants';
export const MainContent = styled('div')(({
  theme
}) => ({
  textAlign: 'center',
  paddingBlock: '3rem',
  '& .img-wrapper': {
    maxWidth: 120,
    margin: 'auto'
  },
  '& .form-wrapper': {
    maxWidth: 450,
    margin: 'auto',
    marginTop: '3rem'
  },
  '& .title': {
    fontSize: 32,
    marginTop: '2rem',
    marginBottom: '1rem'
  },
  '& .description': {
    maxWidth: 650,
    margin: 'auto',
    marginTop: theme.spacing(0.5),
    color: theme.palette.text.secondary
  },
  '& .resend': {
    fontWeight: 500,
    cursor: 'pointer',
    color: theme.palette.error.main
  },
  [theme.breakpoints.down('sm')]: {
    paddingBlock: '2rem',
    '& .description': {
      fontSize: 14
    },
    '& .title': {
      marginTop: '1rem',
      fontSize: 27
    }
  }
}));
export const OtpInputField = styled('input')(({
  theme
}) => ({
  all: 'unset',
  width: 70,
  height: 70,
  fontSize: 18,
  flexBasis: 70,
  fontWeight: 600,
  borderRadius: 12,
  backgroundColor: 'white',
  input: {
    textAlign: 'center'
  },
  '::placeholder': {
    color: theme.palette.text.primary
  },
  ...(isDark(theme) && {
    backgroundColor: theme.palette.grey[800]
  })
}));