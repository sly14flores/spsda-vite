import { Fragment, useContext, useState } from 'react'; // MUI

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import ClickAwayListener from '@mui/material/ClickAwayListener'; // SITE SETTINGS CONTEXT FILE

import { SettingsContext } from '@/contexts/settingsContext'; // CUSTOM ICON COMPONENTS

import Menu from '@/icons/Menu';
// import MenuLeft from '@/icons/MenuLeft';
import ThemeIcon from '@/icons/ThemeIcon';
import Search from '@/icons/duotone/Search';
// import MenuLeftRight from '@/icons/MenuLeftRight'; // LAYOUT BASED HOOK

import useLayout from '@/spsda/layouts/layout-1/context/useLayout'; // CUSTOM COMPONENTS

// import SearchBar from '@/spsda/layouts/layout-parts/SearchBar';
import ProfilePopover from '@/spsda/layouts/layout-parts/popovers/ProfilePopover';
// import ServicePopover from '@/spsda/layouts/layout-parts/popovers/ServicePopover';
// import LanguagePopover from '@/spsda/layouts/layout-parts/popovers/LanguagePopover';
// import NotificationsPopover from '@/spsda/layouts/layout-parts/popovers/NotificationsPopover'; // STYLED COMPONENTS

import { DashboardHeaderRoot, StyledToolBar } from '@/spsda/layouts/layout-1/styles';
export default function DashboardHeader() {
  const {
    handleOpenMobileSidebar
  } = useLayout();
  const [openSearchBar, setSearchBar] = useState(false);
  const {
    settings,
    saveSettings
  } = useContext(SettingsContext);
  // const upSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const downMd = useMediaQuery(theme => theme.breakpoints.down(1200));

  // const handleChangeDirection = value => {
  //   saveSettings({ ...settings,
  //     direction: value
  //   });
  // };

  const handleChangeTheme = value => {
    saveSettings({ ...settings,
      theme: value
    });
  };

  return <DashboardHeaderRoot position="sticky">
      <StyledToolBar>
        {
        /* SMALL DEVICE SIDE BAR OPEN BUTTON */
      }
        {downMd && <IconButton onClick={handleOpenMobileSidebar}>
            <Menu />
          </IconButton>}

        {
        /* SEARCH ICON BUTTON */
      }
        {/* <ClickAwayListener onClickAway={() => setSearchBar(false)}>
          <div>
            {!openSearchBar ? <IconButton onClick={() => setSearchBar(true)}>
                <Search sx={{
              color: 'grey.400',
              fontSize: 18
            }} />
              </IconButton> : null}

            <SearchBar open={openSearchBar} handleClose={() => setSearchBar(false)} />
          </div>
        </ClickAwayListener> */}

        <Box flexGrow={1} ml={1} />

        {
        /* THEME SWITCH BUTTON */
      }
        <IconButton onClick={() => handleChangeTheme(settings.theme === 'light' ? 'dark' : 'light')}>
          <ThemeIcon />
        </IconButton>

        <ProfilePopover />
      </StyledToolBar>
    </DashboardHeaderRoot>;
}