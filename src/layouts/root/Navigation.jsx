import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // MUI

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListItemButton from '@mui/material/ListItemButton';
import styled from '@mui/material/styles/styled'; // MUI ICON COMPONENT

import Menu from '@mui/icons-material/Menu'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import Scrollbar from '@/components/scrollbar';
import MegaMenu from './menu/MegaMenu';
import MegaMenuList from './menu/MegaMenuList'; // CUSTOM ICON COMPONENT

import ChevronDown from '@/icons/ChevronDown'; // NAVIGATION LIST

import { PAGES_MENUS } from './menu/navigation'; // STYLED COMPONENT

const StyledRoot = styled('header')(({
  theme
}) => ({
  paddingBlock: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));
const StyledNav = styled('nav')(({
  theme
}) => ({
  display: 'flex',
  fontSize: 14,
  fontWeight: 500,
  listStyle: 'none',
  alignItems: 'center',
  gap: theme.spacing(5)
}));
const StyledNavItem = styled(Link, {
  shouldForwardProp: prop => prop !== 'isDark' && prop !== 'isActive'
})(({
  theme,
  isDark,
  isActive
}) => ({
  color: 'white',
  transition: 'color 300ms',
  ':hover': {
    color: theme.palette.primary.main
  },
  ...(isDark && {
    color: theme.palette.text.primary
  }),
  ...(isActive && {
    color: theme.palette.primary.main
  })
}));
export default function Navigation() {
  const {
    pathname
  } = useLocation();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const isMedium = useMediaQuery(theme => theme.breakpoints.up('md'));

  const isActive = path => pathname === path;

  const isComponentsRoute = pathname.startsWith('/components');
  useEffect(() => {
    if (isMedium) setOpen(false);
  }, [isMedium]); // FOR LARGE SCREEN DEVICE

  const LARGE_DEVICE_CONTENT = <StyledNav>
      <StyledNavItem href="/demo" isActive={isActive('/demo')} isDark={isComponentsRoute}>
        Home
      </StyledNavItem>

      {
      /* PAGES MEGA MENU */
    }
      <MegaMenu isDark={isComponentsRoute} />

      <StyledNavItem href="/demo/components" isDark={isComponentsRoute} isActive={isActive('/components')}>
        Components
      </StyledNavItem>

      <StyledNavItem href="http://uko-doc.vercel.app/" isDark={isComponentsRoute}>
        Documentation
      </StyledNavItem>

      <Button href="https://mui.com/store/items/uko-client-admin-dashboard/">Buy Now</Button>
    </StyledNav>; // FOR SMALL AND MEDIUM SCREEN DEVICE

  const SMALL_DEVICE_CONTENT = <Fragment>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Scrollbar>
          <List disablePadding sx={{
          minWidth: 260,
          height: '100%'
        }}>
            <ListItem sx={{
            mb: 1
          }}>
              <img src="/static/logo/logo-svg.svg" alt="logo" width={40} height={40} />
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="/demo/">
                Home
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{
            flexDirection: 'column',
            alignItems: 'start'
          }}>
              <ListItemButton onClick={() => setCollapsed(!collapsed)} sx={{
              width: '100%',
              justifyContent: 'space-between'
            }}>
                Pages{' '}
                <ChevronDown sx={{
                rotate: collapsed ? '180deg' : 0,
                transition: 'rotate 300ms'
              }} />
              </ListItemButton>

              <Collapse in={collapsed}>
                <Box px={2} py={1.5}>
                  {PAGES_MENUS.map(({
                  child,
                  id,
                  title
                }) => <Box key={id} pl={1} py={id === 2 ? 3 : 0}>
                      <MegaMenuList title={title} child={child} />
                    </Box>)}
                </Box>
              </Collapse>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="/demo/components">
                Components
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent="a" href="http://uko-doc.vercel.app/">
                Documentation
              </ListItemButton>
            </ListItem>

            <ListItem sx={{
            mt: 1
          }}>
              <Button fullWidth href="https://mui.com/store/items/uko-client-admin-dashboard/">
                Buy Now
              </Button>
            </ListItem>
          </List>
        </Scrollbar>
      </Drawer>

      <IconButton color="primary" onClick={() => setOpen(true)} sx={{
      flexShrink: 0
    }}>
        <Menu />
      </IconButton>
    </Fragment>;
  return <StyledRoot>
      {
      /* UKO LOGO */
    }
      <Link href="/demo/">
        <img src="/static/logo/logo-svg.svg" alt="logo" width={35} height={35} />
      </Link>

      {isMedium ? LARGE_DEVICE_CONTENT : SMALL_DEVICE_CONTENT}
    </StyledRoot>;
}