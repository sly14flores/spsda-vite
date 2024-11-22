import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ButtonBase from '@mui/material/ButtonBase';
import styled from '@mui/material/styles/styled'; // UTILS

import { isDark, secondarySideBarGap, secondarySideBarWidth } from '@/utils/constants'; // ==============================================================

// ==============================================================
// FOR DASHBOARD HEADER
export const DashboardHeaderRoot = styled(AppBar)(({
  theme
}) => ({
  boxShadow: 'none',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  backgroundImage: 'none',
  backdropFilter: 'blur(6px)',
  backgroundColor: 'transparent',
  color: theme.palette.text.primary
}));
export const StyledToolBar = styled(Toolbar)({
  '@media (min-width: 0px)': {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: 'auto'
  }
}); // FOR SIDEBAR

export const MainMenu = styled('div')(({
  theme
}) => ({
  left: 0,
  width: 80,
  height: '100%',
  position: 'fixed',
  boxShadow: theme.shadows[2],
  transition: 'left 0.3s ease',
  zIndex: theme.zIndex.drawer + 11,
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down('md')]: {
    left: -80
  },
  '.navigation-list': {
    paddingInline: '1rem'
  }
}));
export const SecondarySideBar = styled('div', {
  shouldForwardProp: prop => prop !== 'show'
})(({
  theme,
  show
}) => ({
  height: '100%',
  position: 'fixed',
  boxShadow: theme.shadows[1],
  width: secondarySideBarWidth,
  zIndex: theme.zIndex.drawer + 1,
  transition: 'left 0.3s ease-in-out',
  left: show ? 80 : -(secondarySideBarWidth + secondarySideBarGap),
  backgroundColor: theme.palette.background.paper
}));
export const LogoBox = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: '1rem',
  marginBottom: '1.25rem',
  justifyContent: 'center'
}));
export const Dot = styled('div')({
  width: 4,
  height: 4,
  marginRight: 10,
  borderRadius: '50%'
});
export const SubMenuItem = styled('div', {
  shouldForwardProp: prop => prop !== 'active'
})(({
  theme,
  active
}) => ({
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  padding: '0.6rem 1.2rem',
  '.title': {
    color: active ? theme.palette.primary.main : theme.palette.text.secondary
  },
  '.dot': {
    backgroundColor: active ? theme.palette.primary.main : theme.palette.text.secondary
  },
  '&:hover': {
    '.title': {
      color: theme.palette.primary.main
    },
    '.dot': {
      backgroundColor: theme.palette.primary.main
    },
    backgroundColor: isDark(theme) ? theme.palette.divider : theme.palette.secondary.light
  }
}));
export const MobileSidebarWrapper = styled('div', {
  shouldForwardProp: prop => prop !== 'show'
})(({
  theme,
  show
}) => ({
  '.main-list': {
    width: 80,
    height: '100%',
    position: 'fixed',
    boxShadow: theme.shadows[1],
    transition: 'transform 0.3s',
    zIndex: theme.zIndex.drawer + 3,
    backgroundColor: theme.palette.background.paper,
    transform: show ? 'translateX(0)' : 'translateX(-100%)',
    '.navigation-list': {
      paddingInline: '1rem',
      paddingBottom: '.75rem'
    }
  },
  '.backdrop': {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'fixed',
    zIndex: theme.zIndex.drawer,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  '.secondary-list-wrapper': {
    width: 250,
    height: '100%',
    position: 'fixed',
    left: show ? 0 : -300,
    transition: 'left 0.3s',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.paper,
    '.list-inner': {
      height: '100%',
      marginLeft: '80px',
      position: 'relative',
      width: 'calc(100% - 80px)'
    }
  }
}));
export const NavItemButton = styled(ButtonBase, {
  shouldForwardProp: prop => prop !== 'active'
})(({
  theme,
  active
}) => ({
  height: 48,
  width: '100%',
  marginBottom: 8,
  borderRadius: '8px',
  padding: '10px 10px',
  '.MuiSvgIcon-root': {
    fontSize: 20,
    color: active ? theme.palette.primary.main : theme.palette.text.secondary
  },
  ...(active && {
    backgroundColor: isDark(theme) ? theme.palette.action.hover : theme.palette.primary[25]
  }),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    '.MuiSvgIcon-root': {
      color: theme.palette.primary.main
    }
  }
}));