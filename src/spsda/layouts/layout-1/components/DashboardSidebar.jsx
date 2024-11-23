import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'; // LAYOUT BASED HOOK

import useLayout from '@/spsda/layouts/layout-1/context/useLayout'; // CUSTOM COMPONENTS

import MultiLevelMenu from './MultiLevelMenu';
import Link from '@/components/link';
import Scrollbar from '@/components/scrollbar';
import FlexBetween from '@/components/flexbox/FlexBetween';
import UserAccount from '@/spsda/layouts/layout-parts/UserAccount'; // CUSTOM ICON COMPONENT

import ArrowLeftToLine from '@/icons/duotone/ArrowLeftToLine'; // STYLED COMPONENTS

import { SidebarWrapper } from '@/spsda/layouts/layout-1/styles';
const TOP_HEADER_AREA = 70;
export default function DashboardSidebar() {
  const {
    sidebarCompact,
    handleSidebarCompactToggle
  } = useLayout();
  const [onHover, setOnHover] = useState(false); // ACTIVATE COMPACT WHEN TOGGLE BUTTON CLICKED AND NOT ON HOVER STATE

  const COMPACT = sidebarCompact && !onHover ? 1 : 0;
  return <SidebarWrapper compact={sidebarCompact ? 1 : 0} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => sidebarCompact && setOnHover(false)}>
      <FlexBetween padding="1.5rem 1rem .5rem 1.8rem" height={TOP_HEADER_AREA}>
        {
        /* LOGO */
      }
        <Link href="/">
          <Box component="img" src="/static/spsda/logo.png" alt="logo" width={30} />
        </Link>

        {
        /* SIDEBAR COLLAPSE BUTTON */
      }
        {!COMPACT ? <IconButton onClick={handleSidebarCompactToggle}>
            <ArrowLeftToLine />
          </IconButton> : null}
      </FlexBetween>

      <Scrollbar autoHide clickOnTrack={false} sx={{
      overflowX: 'hidden',
      maxHeight: `calc(100vh - ${TOP_HEADER_AREA}px)`
    }}>
        <Box height="100%" px={2}>
          {
          /* NAVIGATION ITEMS */
        }
          <MultiLevelMenu sidebarCompact={!!COMPACT} />

          {
          /* USER ACCOUNT INFO */
        }
          {!COMPACT ? <UserAccount /> : null}
        </Box>
      </Scrollbar>
    </SidebarWrapper>;
}