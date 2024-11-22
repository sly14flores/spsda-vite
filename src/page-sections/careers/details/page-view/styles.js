import Container from '@mui/material/Container';
import styled from '@mui/material/styles/styled';
export const Space = styled('div')(({
  theme
}) => ({
  height: 200,
  [theme.breakpoints.down('sm')]: {
    height: 170
  },
  [theme.breakpoints.down(425)]: {
    height: 130
  }
}));
export const StyledContainer = styled(Container)({
  zIndex: 1,
  marginTop: '-6rem',
  position: 'relative',
  paddingBottom: '5rem'
});