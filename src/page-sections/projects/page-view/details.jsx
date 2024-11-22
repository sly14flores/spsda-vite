import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Radio from '@mui/material/Radio';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import AvatarGroup from '@mui/material/AvatarGroup';
import LinearProgress from '@mui/material/LinearProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from '@mui/material/styles/styled'; // MUI ICON COMPONENT

import MoreHoriz from '@mui/icons-material/MoreHoriz'; // CUSTOM COMPONENTS

import MoreButton from '@/components/more-button';
import { H6, Paragraph } from '@/components/typography';
import { FlexBox, FlexBetween } from '@/components/flexbox'; // CUSTOM DATA

import { PROJECT_FILES, PROJECT_STACKS, PROJECT_TASKS, PROJECT_TOOLS } from '@/__fakeData__/projects'; // STYLED COMPONENTS

const StyledAvatar = styled(Avatar)({
  width: 34,
  height: 34
});
const Div = styled('div')({
  padding: '1.5rem'
});
const RightContentWrapper = styled('div')({
  gap: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& .MuiPaper-root': {
    padding: '1.5rem'
  }
});
const StyledFormControlLabel = styled(FormControlLabel)({
  margin: 0,
  width: '100%',
  paddingBottom: '1rem',
  alignItems: 'flex-start',
  '& .MuiRadio-root': {
    padding: 0,
    paddingRight: 10
  },
  '&:last-child': {
    paddingBottom: 0
  }
});
export default function ProjectDetails() {
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <Card>
            <Div>
              <FlexBetween>
                <H6 fontSize={18} mb={1}>
                  Project Nightfall
                </H6>

                <MoreButton Icon={MoreHoriz} />
              </FlexBetween>

              <Paragraph lineHeight={1.75} color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
                elit, sed do eiusmod tempor ut labore et dolore magna aliqua. sed do eiusmod tempor
                ut labore.
              </Paragraph>
            </Div>

            <Divider />

            <Div>
              <Grid container spacing={3}>
                {
                /* TASKS */
              }
                <Grid size={{
                sm: 7,
                xs: 12
              }}>
                  <Paragraph fontWeight={600} mb={2}>
                    Tasks
                  </Paragraph>

                  {PROJECT_TASKS.map(task => <StyledFormControlLabel key={task.title} control={<Radio size="small" disableRipple disableTouchRipple disableFocusRipple checked={task.status === 'Completed'} />} label={<div>
                          <Paragraph lineHeight={1} fontWeight={500}>
                            {task.title}
                          </Paragraph>
                          <Paragraph mt={0.5} fontSize={12} color="text.secondary">
                            {task.status}
                          </Paragraph>
                        </div>} />)}
                </Grid>

                {
                /* TEAMS */
              }
                <Grid size={{
                sm: 5,
                xs: 12
              }}>
                  <Paragraph fontWeight={600} mb={2}>
                    Team
                  </Paragraph>

                  <AvatarGroup max={5}>
                    <Avatar alt="Remy Sharp" src="/static/user/user-16.png" />
                    <Avatar alt="Travis Howard" src="/static/user/user-17.png" />
                    <Avatar alt="Cindy Baker" src="/static/user/user-18.png" />
                    <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
                    <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
                    <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
                    <Avatar alt="Cindy Baker" src="/static/user/user-19.png" />
                  </AvatarGroup>

                  <FlexBetween mb={1.5} mt={3}>
                    <Paragraph fontWeight={600}>Project Progress</Paragraph>
                    <Paragraph fontWeight={600}>32%</Paragraph>
                  </FlexBetween>

                  <LinearProgress variant="determinate" value={32} />
                </Grid>
              </Grid>
            </Div>

            <Divider />

            {
            /* FILE ATTACHMENTS */
          }
            <Div>
              <Paragraph fontWeight={600} mb={2}>
                File Attachment
              </Paragraph>

              <Grid container spacing={3}>
                {PROJECT_FILES.map(item => <Grid size={{
                sm: 6,
                xs: 12
              }} key={item.id}>
                    <FlexBetween>
                      <FlexBox alignItems="center" gap={1}>
                        <Box height={40} width={40}>
                          <img src={item.image} alt="File Type" width="100%" />
                        </Box>

                        <div>
                          <Paragraph fontWeight={500}>{item.title}</Paragraph>

                          <FlexBox alignItems="center" gap={1}>
                            <Paragraph color="text.secondary" fontSize={12}>
                              3mb
                            </Paragraph>

                            <Box width={4} height={4} borderRadius={1} bgcolor="text.secondary" />

                            <Paragraph color="text.secondary" fontSize={12}>
                              5 days ago
                            </Paragraph>
                          </FlexBox>
                        </div>
                      </FlexBox>

                      <MoreButton Icon={MoreHoriz} />
                    </FlexBetween>
                  </Grid>)}
              </Grid>
            </Div>
          </Card>
        </Grid>

        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <RightContentWrapper>
            {
            /* PROJECT TOOLS */
          }
            <Card>
              <Paragraph fontWeight={600}>Project Tools</Paragraph>

              {PROJECT_TOOLS.map(item => <FlexBox alignItems="center" gap={1.5} mt={2} key={item.id}>
                  <StyledAvatar alt="Logo" src={item.image} />

                  <div>
                    <Paragraph fontWeight={500}>{item.company}</Paragraph>
                    <Paragraph fontSize={12} mt="2px" color="text.secondary">
                      {item.position}
                    </Paragraph>
                  </div>
                </FlexBox>)}
            </Card>

            {
            /* PROJECT STACKS */
          }
            <Card>
              <Paragraph fontWeight={600}>Project Stack</Paragraph>

              {PROJECT_STACKS.map(item => <FlexBox alignItems="center" gap={1.5} mt={2} key={item.id}>
                  <StyledAvatar alt="Logo" src={item.image} />

                  <div>
                    <Paragraph fontWeight={500}>{item.company}</Paragraph>
                    <Paragraph fontSize={12} mt="2px" color="text.secondary">
                      {item.position}
                    </Paragraph>
                  </div>
                </FlexBox>)}
            </Card>
          </RightContentWrapper>
        </Grid>
      </Grid>
    </div>;
}