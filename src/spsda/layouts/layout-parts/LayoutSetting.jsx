import { Fragment, useState } from 'react'; // MUI

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled'; // MUI ICON COMPONENT

import Clear from '@mui/icons-material/Clear'; // CUSTOM COMPONENTS

import { H5 } from '@/components/typography';
import FlexBox from '@/components/flexbox/FlexBox'; // CUSTOM DEFINED HOOK

import useSettings from '@/hooks/useSettings'; // THEME SETTINGS INTERFACE

// STYLED COMPONENTS
const CustomDrawer = styled(Drawer)(({
  theme
}) => ({
  flexShrink: 0,
  width: '250px',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiPaper-root': {
    width: '250px',
    overflow: 'initial',
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));
const layoutName = {
  zIndex: 12,
  width: '100%',
  height: '100%',
  display: 'flex',
  borderRadius: '8px',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0,0.3)'
};
const LayoutBox = styled(Box)(({
  theme
}) => ({
  height: 200,
  width: '100%',
  cursor: 'pointer',
  overflow: 'hidden',
  borderRadius: '8px',
  marginBottom: '20px',
  position: 'relative',
  boxShadow: theme.shadows[1],
  '& .layout-name': {
    display: 'none'
  },
  '&:hover .layout-name': layoutName,
  '& .selected': layoutName,
  '.layout-img': {
    width: '100%',
    height: 'auto',
    objectFit: 'cover'
  }
}));
const StyledButton = styled(Button)(() => ({
  top: '40%',
  right: -30,
  height: '30px',
  fontWeight: 400,
  position: 'fixed',
  transform: 'rotate(90deg)',
  borderRadius: '0 0 5px 5px'
}));
export default function LayoutSetting() {
  const [open, setOpen] = useState(false);
  const {
    settings,
    saveSettings
  } = useSettings();

  const changeLayout = value => {
    setOpen(false);
    saveSettings({ ...settings,
      activeLayout: value
    });
  };

  return <Fragment>
      <StyledButton color="primary" onClick={() => setOpen(true)}>
        Layouts
      </StyledButton>

      <CustomDrawer open={open} anchor="right" elevation={3} variant="persistent" onClose={() => setOpen(false)}>
        <FlexBox alignItems="center" justifyContent="space-between" px={2} py={1}>
          <H5 fontSize={15}>Available Layouts</H5>
          <IconButton onClick={() => setOpen(false)} size="small">
            <Clear />
          </IconButton>
        </FlexBox>

        <Divider />

        <FlexBox padding="20px" flexDirection="column">
          {demoLayouts.map(item => <LayoutBox key={item.name} onClick={() => changeLayout(item.name)}>
              <Box overflow="hidden" className={settings.activeLayout === item.name ? 'layout-name selected' : 'layout-name'}>
                <Button variant="contained">{item.title}</Button>
              </Box>

              <img className="layout-img" src={item.imgUrl} alt={item.name} />
            </LayoutBox>)}
        </FlexBox>
      </CustomDrawer>
    </Fragment>;
}
const demoLayouts = [{
  name: 'layout1',
  title: 'Layout V1',
  imgUrl: '/static/layouts/layout-1.jpg'
}, {
  name: 'layout2',
  title: 'Layout V2',
  imgUrl: '/static/layouts/layout-2.jpg'
}];