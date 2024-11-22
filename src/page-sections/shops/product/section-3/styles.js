import ButtonBase from '@mui/material/ButtonBase';
import styled from '@mui/material/styles/styled'; // STYLED COMPONENTS

export const StyledRoot = styled('div')(({
  theme
}) => ({
  backgroundImage: 'url(/static/post/4.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: 600,
  display: 'grid',
  placeItems: 'center',
  [theme.breakpoints.down('sm')]: {
    minHeight: 300
  },
  [theme.breakpoints.down('lg')]: {
    minHeight: 400
  }
}));
export const StyledButton = styled(ButtonBase)(({
  theme
}) => ({
  backgroundColor: '#ffffff8c',
  padding: theme.spacing(2),
  borderRadius: '50%',
  outline: '2px solid white',
  outlineOffset: 6
}));