import Grid from '@mui/material/Grid2'; // CUSTOM COMPONENTS

import JobList from '../JobList';
import RecentJob from '../RecentJob';
import Candidates from '../Candidates';
import CommonCard from '../CommonCard';
import ProfileCard from '../ProfileCard';
import UpgradeCard from '../UpgradeCard';
import Application from '../Application';
import Acquisitions from '../Acquisitions';
import { Footer } from '@/page-sections/dashboards/_common';
export default function JobManagementPageView() {
  const CARD_LIST = [{
    id: 1,
    trend: 14,
    amount: 272,
    progress: 70,
    title: 'Total Applications'
  }, {
    id: 2,
    trend: 6,
    amount: 20,
    progress: 50,
    title: 'Shortlisted'
  }];
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        <Grid container spacing={3} size={{
        md: 8,
        xs: 12
      }}>
          {
          /* DIFFERENT DATA SHOW WITH CHART */
        }
          {CARD_LIST.map(item => <Grid size={{
          md: 6,
          xs: 12
        }} key={item.id}>
              <CommonCard card={item} />
            </Grid>)}

          {
          /* RECENT JOB CHARTS CARD */
        }
          <Grid size={{
          md: 6,
          xs: 12
        }}>
            <RecentJob />
          </Grid>

          {
          /* DIFFERENT DATA SHOW WITH PROGRESS */
        }
          <Grid size={{
          md: 6,
          xs: 12
        }}>
            <Acquisitions />
          </Grid>
        </Grid>

        {
        /* USER PROFILE SHORT INFO CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <ProfileCard />
        </Grid>

        {
        /* JOB LIST TABLE CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <JobList />
        </Grid>

        {
        /* CANDIDATES DATA CHART CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <Candidates />
        </Grid>

        {
        /* APPLICATION CHART CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <Application />
        </Grid>

        {
        /* UPGRADE APP CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <UpgradeCard />
        </Grid>

        {
        /* FOOTER */
      }
        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>;
}