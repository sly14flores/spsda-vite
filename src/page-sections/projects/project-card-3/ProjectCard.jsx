import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { H6, Paragraph } from '@/components/typography'; // STYLED COMPONENTS

import { StyledRoot } from './styles';
export default function ProjectCard3() {
  return <StyledRoot>
      <div className="img-wrapper">
        <img src="/static/thumbnail/thumbnail-1.png" alt="Project Thumbnail" />
      </div>

      <div className="content">
        <Link href="/dashboard/projects/details">
          <H6 fontSize={18} mb={1} color="text.primary">
            Project Nightfall
          </H6>
        </Link>

        <Paragraph lineHeight={1.8} color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore
          et dolore magna aliqua.
        </Paragraph>

        <FlexBetween flexWrap="wrap" pt="1rem" gap={1}>
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/static/user/user-16.png" />
            <Avatar alt="Travis Howard" src="/static/user/user-17.png" />
            <Avatar alt="Cindy Baker" src="/static/user/user-18.png" />
            <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
            <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
            <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
            <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
          </AvatarGroup>

          <Chip label="3 Weeks Left" color="secondary" />
        </FlexBetween>
      </div>
    </StyledRoot>;
}