import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled'; // MUI ICON COMPONENTS

import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn'; // CUSTOM COMPONENTS

import { H6 } from '@/components/typography'; // CUSTOM ICON COMPONENTS

import Twitter from '@/icons/social/Twitter';
import Facebook from '@/icons/social/Facebook'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENT

const StyledRoot = styled('div')(({
  theme
}) => ({
  gap: 2,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: theme.spacing(3),
  borderRadius: theme.spacing(1),
  paddingBlock: theme.spacing(3),
  backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100],
  '& .icon': {
    color: theme.palette.text.secondary
  }
}));
export default function FollowMore() {
  return <StyledRoot>
      <H6 fontSize={16}>Follow More</H6>

      <div>
        <IconButton>
          <Facebook className="icon" />
        </IconButton>

        <IconButton>
          <Twitter className="icon" />
        </IconButton>

        <IconButton>
          <LinkedIn className="icon" />
        </IconButton>

        <IconButton>
          <GitHub className="icon" />
        </IconButton>
      </div>
    </StyledRoot>;
}