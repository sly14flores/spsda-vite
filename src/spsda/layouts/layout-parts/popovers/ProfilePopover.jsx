import { Fragment, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // MUI

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
// import Divider from '@mui/material/Divider';
import ButtonBase from '@mui/material/ButtonBase';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import PopoverLayout from './PopoverLayout';
import FlexBox from '@/components/flexbox/FlexBox';
import AvatarLoading from '@/components/avatar-loading';
import { H6, Paragraph, Small } from '@/components/typography'; // CUSTOM DEFINED HOOK

import { isDark } from '@/utils/constants'; // STYLED COMPONENTS
import useStorage from '@/spsda/hooks/useStorage'

const StyledButtonBase = styled(ButtonBase)(({
  theme
}) => ({
  marginLeft: 8,
  borderRadius: 30,
  border: `1px solid ${theme.palette.grey[isDark(theme) ? 800 : 200]}`,
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}));
const StyledSmall = styled(Paragraph)(({
  theme
}) => ({
  fontSize: 13,
  display: 'block',
  cursor: 'pointer',
  padding: '5px 1rem',
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}));
export default function ProfilePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    useStorage().reset()
    navigate('/login')
  }

  // const handleMenuItem = path => () => {
  //   navigate(path);
  //   setOpen(false);
  // };

  const user = useStorage().get()

  return <Fragment>
      <StyledButtonBase ref={anchorRef} onClick={() => setOpen(true)}>
        <AvatarLoading alt="user" percentage={100} src="/static/user/avatar.png" sx={{
        width: 35,
        height: 35
      }} />
      </StyledButtonBase>

      <PopoverLayout hiddenViewButton maxWidth={230} minWidth={200} popoverOpen={open} anchorRef={anchorRef} popoverClose={() => setOpen(false)} title={<FlexBox alignItems="center" gap={1}>
            <Avatar src="/static/user/avatar.png" sx={{
        width: 35,
        height: 35
      }} />

            <div>
              <H6 fontSize={14}>{`${user?.first_name} ${user?.last_name}`}</H6>
              <Small color="text.secondary" display="block">
                {user?.email}
              </Small>
            </div>
          </FlexBox>}>
        <Box pt={1}>
          {/* <StyledSmall onClick={handleMenuItem('/demo/dashboard/profile')}>Set Status</StyledSmall>

          <StyledSmall onClick={handleMenuItem('/demo/dashboard/profile')}>
            Profile & Account
          </StyledSmall>

          <StyledSmall onClick={handleMenuItem('/demo/dashboard/account')}>Settings</StyledSmall>

          <StyledSmall onClick={handleMenuItem('/demo/dashboard/profile')}>Manage Team</StyledSmall>

          <Divider sx={{
          my: 1
        }} /> */}

          <StyledSmall onClick={logout}>Sign Out</StyledSmall>
        </Box>
      </PopoverLayout>
    </Fragment>;
}