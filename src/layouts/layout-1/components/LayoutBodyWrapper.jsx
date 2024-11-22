// MUI
import Container from '@mui/material/Container';
import styled from '@mui/material/styles/styled'; // LAYOUT BASED HOOK

import useLayout from '@/layouts/layout-1/context/useLayout'; // STYLED COMPONENT

const RootBox = styled('div', {
  shouldForwardProp: prop => prop !== 'compact'
})(({
  theme,
  compact
}) => ({
  marginLeft: compact ? 86 : 280,
  transition: 'margin-left 0.3s ease-in-out',
  [theme.breakpoints.down(1200)]: {
    marginLeft: 0
  }
}));
export default function LayoutBodyWrapper({
  children
}) {
  const {
    sidebarCompact
  } = useLayout();
  return <RootBox compact={sidebarCompact ? 1 : 0}>
      <Container maxWidth="lg">{children}</Container>
    </RootBox>;
}