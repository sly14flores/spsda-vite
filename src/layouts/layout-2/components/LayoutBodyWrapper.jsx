// MUI
import Container from '@mui/material/Container';
import styled from '@mui/material/styles/styled'; // CUSTOM DEFINED HOOK

import useLayout from '@/layouts/layout-2/context/useLayout'; // UTILS

import { secondarySideBarGap, secondarySideBarWidth } from '@/utils/constants';
const space = secondarySideBarWidth + secondarySideBarGap; // STYLED COMPONENT

const RootBox = styled('div', {
  shouldForwardProp: prop => prop !== 'compact'
})(({
  theme,
  compact
}) => ({
  marginLeft: compact ? `${space}px` : '80px',
  transition: 'margin-left 0.3s ease-in-out',
  [theme.breakpoints.down(1200)]: {
    marginLeft: 0
  }
}));
export default function LayoutBodyWrapper({
  children
}) {
  const {
    openSecondarySideBar
  } = useLayout();
  return <RootBox compact={openSecondarySideBar}>
      <Container maxWidth="lg">{children}</Container>
    </RootBox>;
}