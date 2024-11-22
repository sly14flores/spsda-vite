import styled from '@mui/material/styles/styled';
const StyledImage = styled('img')(({
  theme
}) => ({
  marginTop: '-15rem',
  width: '100%',
  borderRadius: 20,
  position: 'relative',
  border: '3px solid transparent',
  background: 'linear-gradient(white, white) padding-box, linear-gradient(180deg, rgba(95, 0, 217, 1) 0%, rgba(247, 122, 220, 1) 70.3125%, rgba(158, 0, 232, 1) 100%) border-box',
  [theme.breakpoints.down('md')]: {
    marginTop: '-10rem'
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '-7rem'
  }
}));
export default function Banner() {
  return <StyledImage alt="hero" src="/static/cover/about-hero.png" />;
}