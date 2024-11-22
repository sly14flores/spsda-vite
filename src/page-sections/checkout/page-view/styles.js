import Container from '@mui/material/Container';
import styled from '@mui/material/styles/styled';
export const Heading = styled('div')(({
  theme
}) => ({
  color: 'white',
  paddingTop: '5rem',
  textAlign: 'center',
  paddingBottom: '13rem',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '2rem'
  }
}));
export const StyledContainer = styled(Container)({
  zIndex: 1,
  marginTop: '-10rem',
  marginBottom: '5rem',
  position: 'relative'
});