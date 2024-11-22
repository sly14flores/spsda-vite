import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AvatarGroup from '@mui/material/AvatarGroup';
import LinearProgress from '@mui/material/LinearProgress'; // MUI ICON COMPONENTS

import Add from '@mui/icons-material/Add';
import MoreHoriz from '@mui/icons-material/MoreHoriz'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import MoreButton from '@/components/more-button';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { H6, Paragraph } from '@/components/typography'; // STYLED COMPONENT

import { StyledRoot } from './styles';
export default function ProjectCard2() {
  return <StyledRoot>
      <FlexBetween>
        <Paragraph ellipsis fontWeight={500} color="text.secondary">
          July 2, 2020
        </Paragraph>

        <MoreButton Icon={MoreHoriz} />
      </FlexBetween>

      <Link href="/dashboard/projects/details">
        <div className="content">
          <H6 fontSize={18} mb={1} color="text.primary">
            Web Designing
          </H6>

          <Paragraph color="text.secondary">Prototyping</Paragraph>
        </div>
      </Link>

      <FlexBetween py={1}>
        <Paragraph fontWeight={600}>Project Progress</Paragraph>
        <Paragraph fontWeight={600}>32%</Paragraph>
      </FlexBetween>

      <LinearProgress variant="determinate" value={32} />

      <FlexBetween pt="1.5rem">
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/user/user-16.png" />
          <Avatar alt="Travis Howard" src="/static/user/user-17.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-18.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
        </AvatarGroup>

        <IconButton className="add-btn">
          <Add fontSize="small" />
        </IconButton>
      </FlexBetween>
    </StyledRoot>;
}