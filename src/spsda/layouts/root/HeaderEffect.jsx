// MUI
import Container from '@mui/material/Container';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import Navigation from './Navigation'; // STYLED COMPONENTS

const StyledRoot = styled('div')(() => ({
  backgroundColor: '#111827',
  backgroundImage: 'radial-gradient(circle at 100% -70%,rgba(9, 206, 218, 0.2), rgba(149,176,249,0) 30%), radial-gradient(circle at 60% -20%,rgba(255, 2, 199, 0.3), rgba(149,176,249,0) 30%), radial-gradient(circle at 80% 30%,rgba(105, 80, 232, 0.2), rgba(149,176,249,0) 30%)',
  '& .content-wrapper': {
    zIndex: 1,
    position: 'relative'
  }
}));
export default function HeaderEffect({
  children
}) {
  return <StyledRoot>
      <Container maxWidth="lg">
        {
        /* HEADER LOGO & MENU SECTION */
      }
        <Navigation />

        {
        /* BANNER SECTION */
      }
        <div className="content-wrapper">{children}</div>
      </Container>
    </StyledRoot>;
}