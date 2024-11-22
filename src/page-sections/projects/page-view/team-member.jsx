import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider'; // MUI ICON COMPONENTS

import Edit from '@mui/icons-material/Edit';
import Flag from '@mui/icons-material/Flag';
import ChatBubble from '@mui/icons-material/ChatBubble'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph } from '@/components/typography';
import ProjectCard3 from '../project-card-3';
import Teams from '../team-member/Teams';
import UserBio from '../team-member/UserBio';
import TodoItem from '../team-member/TodoItem';
import ListItemCard from '../team-member/ListItemCard';
import RecommendedCard from '../team-member/RecommendedCard';
import ActivityListItem from '../team-member/ActivityListItem';
export default function TeamMemberPageView() {
  return <div className="pt-2 pb-4">
      {
      /* USER INFORMATION SECTION */
    }
      <UserBio />

      <Grid container spacing={3} pt={3}>
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <Card>
            {
            /* EXPERIENCES SECTION */
          }
            <Box padding={3}>
              <Paragraph fontWeight={600} mb={3}>
                Experiences
              </Paragraph>

              <Grid container spacing={2}>
                {experienceList.map(item => <Grid size={{
                sm: 6,
                xs: 12
              }} key={item.id}>
                    <ListItemCard item={item} />
                  </Grid>)}
              </Grid>
            </Box>

            <Divider />

            {
            /* PROJECTS SECTION */
          }
            <Box padding={3}>
              <Paragraph fontWeight={600} mb={3}>
                Projects
              </Paragraph>

              <Grid container spacing={3}>
                {projectList.map((item, index) => <Grid size={{
                sm: 6,
                xs: 12
              }} key={index}>
                    <ProjectCard3 />
                  </Grid>)}
              </Grid>
            </Box>

            <Divider />

            {
            /* SKILLS SECTION */
          }
            <Box padding={3}>
              <Paragraph fontWeight={600} mb={3}>
                Skills
              </Paragraph>

              <FlexBox flexWrap="wrap" rowGap={2} columnGap={2}>
                {skills.map((skill, i) => <Chip key={i} label={skill} color="secondary" />)}
              </FlexBox>
            </Box>

            <Divider />

            {
            /* TEAM SECTION */
          }
            <Box padding={3}>
              <Paragraph fontWeight={600} mb={3}>
                Teams
              </Paragraph>

              <Teams />
            </Box>

            <Divider />

            {
            /* RECOMMENDED SECTION */
          }
            <Box padding={3}>
              <Paragraph fontWeight={600} mb={3}>
                Recommended
              </Paragraph>

              <Grid container spacing={3}>
                {[1, 2].map(item => <Grid size={{
                sm: 6,
                xs: 12
              }} key={item}>
                    <RecommendedCard />
                  </Grid>)}
              </Grid>
            </Box>
          </Card>
        </Grid>

        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <Card sx={{
          padding: 3,
          mb: 3
        }}>
            <Paragraph fontWeight={600} mb={3}>
              Recent Activity
            </Paragraph>

            {recentActivity.map(({
            Icon,
            date,
            id,
            title
          }) => <ActivityListItem Icon={Icon} title={title} date={date} key={id} />)}
          </Card>

          <Card sx={{
          padding: 3,
          mb: 3
        }}>
            <Paragraph fontWeight={600} mb={3}>
              Project Stack
            </Paragraph>

            <Stack spacing={2}>
              {stacks.map(item => <ListItemCard item={item} key={item.id} />)}
            </Stack>
          </Card>

          <Card className="p-3">
            <Paragraph fontWeight={600} mb={3}>
              Todo List
            </Paragraph>

            <Stack spacing={2}>
              {todoList.map(item => <TodoItem key={item.id} title={item.title} date={item.date} />)}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </div>;
}
const experienceList = [{
  id: 1,
  company: 'Discord Nitro',
  image: '/static/brands/nitro.svg',
  position: 'Comtec Specialist'
}, {
  id: 2,
  company: 'Invision',
  image: '/static/brands/invision.svg',
  position: 'Design prototype'
}, {
  id: 3,
  company: 'Amazon',
  image: '/static/brands/amazon.svg',
  position: 'Delivery'
}, {
  id: 4,
  company: 'Github',
  image: '/static/brands/github.svg',
  position: 'Developer'
}];
const projectList = [{
  name: 'Project Nightfall',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.',
  thumbnail: '/static/thumbnail/thumbnail-1.png',
  teamMember: ['/static/avatar/010-girl-1.svg', '/static/avatar/011-man-2.svg']
}, {
  name: 'Project Nightfall',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.',
  thumbnail: '/static/thumbnail/thumbnail-2.png',
  teamMember: ['/static/avatar/013-woman-3.svg', '/static/avatar/012-woman-2.svg']
}];
const skills = ['Adobe Illustrator', 'Sketch', 'Adobe Photoshop', 'Adobe XD', 'Figma', 'Adobe Illustrator', 'Sketch', 'Adobe Photoshop', 'Adobe XD', 'Figma'];
const recentActivity = [{
  id: 1,
  date: 'Aug 10',
  Icon: ChatBubble,
  title: 'Karen leave some comments on Konsep Ilustrasi'
}, {
  id: 2,
  Icon: Edit,
  date: 'Aug 10',
  title: 'Karen change project info on Project Homepage'
}, {
  id: 3,
  Icon: Flag,
  date: 'Aug 10',
  title: 'Andrea change the due date of Project Homepage'
}];
const stacks = [{
  id: 1,
  company: 'HTML5',
  image: '/static/files-icon/html.svg',
  position: 'Code'
}, {
  id: 2,
  company: 'VueJS',
  image: '/static/files-icon/vue.svg',
  position: 'Code'
}, {
  id: 3,
  company: 'Sass',
  image: '/static/files-icon/sass.svg',
  position: 'Code'
}];
const todoList = [{
  id: 1,
  title: 'Create Minimal Logo',
  date: 'Due In 2 Days',
  status: 'Pending'
}, {
  id: 2,
  title: 'Stock Market Exchange',
  date: 'Due In 3 Days',
  status: 'Processing'
}, {
  id: 3,
  title: 'Shopping & Groccery',
  date: 'Due In 5 days',
  status: 'Pending'
}, {
  id: 4,
  title: 'Football Match',
  date: 'Due In 1 Day',
  status: 'Completed'
}];