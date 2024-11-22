import { useState } from 'react'; // MUI

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
// MUI ICON COMPONENTS
import Menu from '@mui/icons-material/Menu';
import MoreVert from '@mui/icons-material/MoreVert';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'; // CUSTOM COMPONENTS

import MailSidebar from './mail-sidebar';
import { Paragraph } from '@/components/typography';
import SearchInput from '@/components/search-input';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM ICON COMPONENTS

import Trash from '@/icons/duotone/Trash';
import Reload from '@/icons/duotone/Reload';
import Report from '@/icons/duotone/Report';
import Archive from '@/icons/duotone/Archive';
import ReadMail from '@/icons/duotone/ReadMail';
import UnreadMail from '@/icons/duotone/UnreadMail'; // ==============================================================

// ==============================================================
export default function Layout({
  children,
  showTopActions = true
}) {
  const {
    palette,
    direction
  } = useTheme();
  const [openSidebar, setOpenSidebar] = useState(false);
  const upSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const downMd = useMediaQuery(theme => theme.breakpoints.down('md'));
  const downLg = useMediaQuery(theme => theme.breakpoints.down('xl'));
  const ICONS = [{
    title: 'Reload',
    Icon: Reload
  }, {
    title: 'Archive',
    Icon: Archive
  }, {
    title: 'Report',
    Icon: Report
  }, {
    title: 'Trash',
    Icon: Trash
  }, {
    title: 'Read All',
    Icon: ReadMail
  }, {
    title: 'Unread All',
    Icon: UnreadMail
  }];
  return <Box py={3} height="100%">
      <Card sx={{
      display: 'flex',
      minHeight: 800
    }}>
        {
        /* SIDEBAR */
      }
        <MailSidebar openSidebar={openSidebar} onClose={() => setOpenSidebar(false)} />

        <Box flexGrow={1}>
          {
          /* TOP ACTIONS */
        }
          {showTopActions && <FlexBetween p={3} flexWrap="wrap" borderBottom={`1px solid ${palette.divider}`}>
              <FlexBox gap={1} alignItems="center">
                {
              /* SHOW MENU BUTTON WHEN DEVICE IS MEDIUM */
            }
                {downMd && <IconButton color="secondary" onClick={() => setOpenSidebar(true)}>
                    <Menu fontSize="small" />
                  </IconButton>}

                {
              /* UPTO SMALL DEVICE SHOW THIS CHECKBOX */
            }
                {upSm && <Checkbox size="small" sx={{
              p: 0
            }} />}

                {
              /* WHEN DEVICE IS EXTRA LARGE THEN SHOWS FILTER BUTTONS OTHERWISE SHOW MORE BUTTON */
            }
                {downLg ? <Tooltip title="More">
                    <IconButton color="secondary">
                      <MoreVert fontSize="small" />
                    </IconButton>
                  </Tooltip> : <>
                    {ICONS.map(({
                title,
                Icon
              }, i) => <Tooltip title={title} key={i}>
                        <IconButton sx={{
                  '.MuiSvgIcon-root': {
                    fontSize: 17,
                    color: 'grey.400'
                  }
                }}>
                          <Icon />
                        </IconButton>
                      </Tooltip>)}
                  </>}
              </FlexBox>

              <FlexBox alignItems="center" gap={2} flexShrink={0}>
                {
              /* SEARCH INPUT BOX */
            }
                <SearchInput placeholder="Search email" />

                {
              /* PAGINATION BOX */
            }
                <FlexBox flexShrink={0} color="grey.400" alignItems="center" display={{
              md: 'flex',
              xs: 'none'
            }}>
                  <Paragraph color="inherit" mr={2}>
                    1-10 of 50
                  </Paragraph>

                  <Tooltip title="Previous Page">
                    <IconButton color="inherit" size="small">
                      <ArrowBackIos fontSize="inherit" sx={{
                    rotate: direction === 'rtl' ? '180deg' : 0
                  }} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Next Page">
                    <IconButton color="inherit" size="small">
                      <ArrowForwardIos fontSize="inherit" sx={{
                    rotate: direction === 'rtl' ? '180deg' : 0
                  }} />
                    </IconButton>
                  </Tooltip>
                </FlexBox>
              </FlexBox>
            </FlexBetween>}

          {children}
        </Box>
      </Card>
    </Box>;
}