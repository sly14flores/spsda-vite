// MUI ICON COMPONENTS
import Add from '@mui/icons-material/Add';
import MoreHoriz from '@mui/icons-material/MoreHoriz'; // MUI

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import MoreButton from '@/components/more-button';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { H6, Paragraph } from '@/components/typography'; // STYLED COMPONENTS

import { StyledAvatarGroup, StyledRoot } from './styles'; // ==============================================================

// ==============================================================
export default function ProjectCard1({
  project
}) {
  return <StyledRoot>
      <FlexBetween>
        <Link href="/dashboard/projects/details">
          <H6 ellipsis fontSize={17} color="text.primary">
            {project.name}
          </H6>
        </Link>

        <MoreButton Icon={MoreHoriz} />
      </FlexBetween>

      <Paragraph fontWeight={500} color="text.secondary">
        Due on Nov 3
      </Paragraph>

      <Paragraph my={3} fontWeight={500} lineHeight={1.8} color="text.secondary">
        {project.description}
      </Paragraph>

      <FlexBetween pb={2}>
        <Paragraph fontWeight={600}>Project Progress</Paragraph>
        <Paragraph fontWeight={600}>{project.progress}%</Paragraph>
      </FlexBetween>

      <LinearProgress variant="determinate" value={32} />

      <FlexBetween pt={3}>
        <StyledAvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/user/user-16.png" />
          <Avatar alt="Travis Howard" src="/static/user/user-17.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-18.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
          <Avatar alt="Travis Howard" src="/static/user/user-17.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-18.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
        </StyledAvatarGroup>

        <IconButton className="add-btn">
          <Add fontSize="small" />
        </IconButton>
      </FlexBetween>
    </StyledRoot>;
}