import { useState } from 'react'; // MUI

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from '@mui/material/styles/styled';
import Add from '@mui/icons-material/Add'; // CUSTOM COMPONENTS

import PinChats from '../PinChats';
import AllMessages from '../AllMessages';
import Conversation from '../conversation';
import { H6 } from '@/components/typography';
import SearchInput from '@/components/search-input';
import FlexBetween from '@/components/flexbox/FlexBetween'; // CUSTOM UTIL METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENTS

const StyledSearchInput = styled(SearchInput)(({
  theme
}) => ({
  backgroundColor: theme.palette.action.selected,
  border: `1px solid ${theme.palette.grey[isDark(theme) ? 600 : 200]}`
}));
const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  backgroundColor: theme.palette.action.selected,
  border: `1px solid ${theme.palette.divider}`
}));
export default function ChatPageView() {
  const [openLeftDrawer, setOpenLeftDrawer] = useState(false);
  const downMd = useMediaQuery(theme => theme.breakpoints.down('md'));

  const handleOpen = () => setOpenLeftDrawer(true); // RECENT CONVERSATION LIST


  const MESSAGE_CONTENT = <Card sx={{
    height: '100%',
    pb: 1
  }}>
      <div className="p-3">
        <FlexBetween mb={3}>
          <H6 fontSize={18}>Messages</H6>

          <StyledIconButton size="small">
            <Add />
          </StyledIconButton>
        </FlexBetween>

        <StyledSearchInput placeholder="Search..." />
      </div>

      {
      /* PINNED ITEMS */
    }
      <PinChats />

      <Divider />

      {
      /* ALL MESSAGES */
    }
      <AllMessages />
    </Card>;
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        {downMd ? <Drawer anchor="left" open={openLeftDrawer} onClose={() => setOpenLeftDrawer(false)}>
            <Box width={300} padding={1}>
              {MESSAGE_CONTENT}
            </Box>
          </Drawer> : <Grid size={{
        md: 4,
        xs: 12
      }}>{MESSAGE_CONTENT}</Grid>}

        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <Conversation handleOpen={handleOpen} />
        </Grid>
      </Grid>
    </div>;
}