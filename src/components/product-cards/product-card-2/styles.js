import Card from '@mui/material/Card';
import styled from '@mui/material/styles/styled';
export const StyledRoot = styled(Card)(({
  theme
}) => ({
  padding: theme.spacing(2),
  boxShadow: theme.shadows[0],
  border: `1px solid ${theme.palette.divider}`,
  ':hover': {
    '.img-wrapper': {
      '::after': {
        opacity: 1
      },
      '.hover-actions': {
        opacity: 1
      }
    }
  },
  '& .img-wrapper': {
    height: 250,
    display: 'flex',
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    '::after': {
      opacity: 0,
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      transition: 'opacity 300ms ease-in-out',
      backgroundColor: 'rgba(17, 24, 39, 0.5)'
    },
    '.hover-actions': {
      opacity: 0,
      inset: 0,
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 3,
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '.5rem',
      transition: 'opacity 330ms ease-in-out',
      '.view': {
        color: 'black',
        backgroundColor: 'white'
      },
      '.cart': {
        color: 'white',
        backgroundColor: 'black'
      }
    }
  },
  '& .MuiButton-root': {
    minWidth: 0,
    padding: 4
  },
  '& .content-root': {
    gap: '1rem',
    display: 'flex',
    marginTop: '1rem',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));