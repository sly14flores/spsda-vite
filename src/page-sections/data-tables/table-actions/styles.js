import styled from '@mui/material/styles/styled';
export const ButtonWrapper = styled('div')(({
  theme
}) => ({
  gap: '1rem',
  display: 'flex',
  alignItems: 'center',
  '.select-action': {
    gap: '.5rem',
    display: 'flex',
    alignItems: 'center'
  },
  [theme.breakpoints.down(500)]: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'column-reverse',
    '& > .MuiBox-root': {
      width: '100%',
      margin: '10px 0',
      alignItems: 'center',
      flexDirection: 'column'
    },
    '& .MuiButton-root': {
      minWidth: '100%'
    }
  }
}));