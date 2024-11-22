import { Fragment, useState } from 'react'; // MUI

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import ClickAwayListener from '@mui/material/ClickAwayListener'; // CUSTOM DEFINED HOOK

import useSettings from '@/hooks/useSettings';
import useLayout from '../context/useLayout'; // CUSTOM ICON COMPONENTS

import Menu from '@/icons/Menu';
import MenuLeft from '@/icons/MenuLeft';
import ThemeIcon from '@/icons/ThemeIcon';
import Search from '@/icons/duotone/Search';
import MenuLeftRight from '@/icons/MenuLeftRight'; // CUSTOM COMPONENTS

import SearchBar from '@/layouts/layout-parts/SearchBar';
import ProfilePopover from '@/layouts/layout-parts/popovers/ProfilePopover';
import ServicePopover from '@/layouts/layout-parts/popovers/ServicePopover';
import LanguagePopover from '@/layouts/layout-parts/popovers/LanguagePopover';
import NotificationsPopover from '@/layouts/layout-parts/popovers/NotificationsPopover'; // STYLED COMPONENTS

import { DashboardHeaderRoot, StyledToolBar } from '../styles';
export default function DashboardHeader() {
  const {
    handleToggleSecondarySideBar
  } = useLayout();
  const {
    settings,
    saveSettings
  } = useSettings();
  const [openSearchBar, setSearchBar] = useState(false);
  const upSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const downMd = useMediaQuery(theme => theme.breakpoints.down(1200));

  const handleChangeDirection = value => {
    saveSettings({ ...settings,
      direction: value
    });
  };

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
        {downMd && <IconButton onClick={handleToggleSecondarySideBar}>
            <Menu />
          </IconButton>}

        {
        /* SEARCH ICON BUTTON */
      }
        <ClickAwayListener onClickAway={() => setSearchBar(false)}>
          <div>
            {!openSearchBar ? <IconButton onClick={() => setSearchBar(true)}>
                <Search sx={{
              color: 'grey.400',
              fontSize: 18
            }} />
              </IconButton> : null}

            <SearchBar open={openSearchBar} handleClose={() => setSearchBar(false)} />
          </div>
        </ClickAwayListener>

        <Box flexGrow={1} ml={1} />

        {
        /* TEXT DIRECTION SWITCH BUTTON */
      }
        {settings.direction === 'rtl' ? <IconButton onClick={() => handleChangeDirection('ltr')}>
            <MenuLeft sx={{
          color: 'grey.400'
        }} />
          </IconButton> : <IconButton onClick={() => handleChangeDirection('rtl')}>
            <MenuLeftRight sx={{
          color: 'grey.400'
        }} />
          </IconButton>}

        {
        /* THEME SWITCH BUTTON */
      }
        <IconButton onClick={() => handleChangeTheme(settings.theme === 'light' ? 'dark' : 'light')}>
          <ThemeIcon />
        </IconButton>

        <LanguagePopover />

        {upSm && <Fragment>
            <NotificationsPopover />
            <ServicePopover />
          </Fragment>}

        <ProfilePopover />
      </StyledToolBar>
    </DashboardHeaderRoot>;
}