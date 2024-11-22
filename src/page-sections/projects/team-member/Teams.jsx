import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENT

import { Paragraph } from '@/components/typography'; // STYLED COMPONENT

const StyledAvatarGroup = styled(AvatarGroup)({
  marginTop: 8,
  justifyContent: 'flex-end'
});
export default function Teams() {
  return <Grid container spacing={3}>
      <Grid size={{
      sm: 6,
      xs: 12
    }}>
        <Paragraph fontWeight={500} color="text.secondary">
          Discord Nitro
        </Paragraph>

        <StyledAvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/user/user-16.png" />
          <Avatar alt="Travis Howard" src="/static/user/user-10.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-11.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-17.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-18.png" />
        </StyledAvatarGroup>
      </Grid>

      <Grid size={{
      sm: 6,
      xs: 12
    }}>
        <Paragraph fontWeight={500} color="text.secondary">
          Github
        </Paragraph>

        <StyledAvatarGroup max={4}>
          <Avatar alt="Cindy Baker" src="/static/user/user-17.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-18.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
          <Avatar alt="Cindy Baker" src="/static/avatar/008-clown.svg" />
          <Avatar alt="Cindy" src="/static/avatar/009-firefighter.svg" />
          <Avatar alt="Cindy Baker" src="/static/avatar/011-man-2.svg" />
        </StyledAvatarGroup>
      </Grid>
    </Grid>;
}