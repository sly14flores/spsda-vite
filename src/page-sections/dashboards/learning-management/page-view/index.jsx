import Grid from '@mui/material/Grid2';
import useTheme from '@mui/material/styles/useTheme'; // CUSTOM ICON COMPONENTS

import LeafIcon from '@/icons/LeafIcon';
import ChartIcon from '@/icons/ChartIcon';
import CrownIcon from '@/icons/CrownIcon'; // CUSTOM COMPONENTS

import Results from '../Results';
import StudyTime from '../StudyTime';
import Downloads from '../Downloads';
import WelcomeCard from '../WelcomeCard';
import UpgradeCard from '../UpgradeCard';
import UpcomingTask from '../UpcomingTask';
import LearningCard from '../LearningCard';
import CourseStatus from '../CourseStatus';
import { Footer } from '@/page-sections/dashboards/_common';
export default function LearningManagementPageView() {
  const theme = useTheme();
  const LEARNING_CARD_LIST = [{
    price: 1023,
    Icon: ChartIcon,
    title: 'Course in Progress',
    color: theme.palette.info.main
  }, {
    price: 1250,
    title: 'Enrolled Courses',
    Icon: LeafIcon,
    color: theme.palette.warning.main
  }, {
    price: 1450,
    Icon: CrownIcon,
    title: 'Course Completed',
    color: theme.palette.primary.main
  }];
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        {
        /* WELCOME BACK CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <WelcomeCard />
        </Grid>

        {
        /* UPGRADE PRO CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <UpgradeCard />
        </Grid>

        {
        /* RESULTS ANALYTICS */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <Results />
        </Grid>

        {
        /* STUDY TIME CHART CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <StudyTime />
        </Grid>

        {
        /* UPCOMING TASK LIST CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <UpcomingTask />
        </Grid>

        {
        /* STATUS ANALYTICS CARD */
      }
        {LEARNING_CARD_LIST.map((item, key) => <Grid size={{
        md: 4,
        xs: 12
      }} key={key}>
            <LearningCard card={item} />
          </Grid>)}

        {
        /* COURSE STATUS TABLE CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <CourseStatus />
        </Grid>

        {
        /* DOWNLOAD LIST CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <Downloads />
        </Grid>

        {
        /* FOOTER CARD */
      }
        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>;
}