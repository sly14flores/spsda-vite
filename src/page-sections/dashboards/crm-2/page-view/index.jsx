import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack'; // CUSTOM ICON COMPONENTS

import DoneIcon from '@/icons/DoneIcon';
import CloudIcon from '@/icons/CloudIcon';
import MoneyIcon from '@/icons/MoneyIcon';
import ErrorIcon from '@/icons/ErrorIcon';
import UserAddIcon from '@/icons/UserAddIcon';
import UserBigIcon from '@/icons/UserBigIcon';
import HourGlassIcon from '@/icons/HourGlassIcon'; // CUSTOM COMPONENTS

import Tasks from '../Tasks';
import LeadCard from '../LeadCard';
import LongCard from '../LongCard';
import Overviews from '../Overviews';
import CustomerList from '../CustomerList';
import ProjectStatus from '../ProjectStatus';
import LeadVSCustomer from '../LeadVsCustomer';
import { Footer } from '@/page-sections/dashboards/_common';
export default function CrmTwoPageView() {
  const LIST_1 = [{
    id: 1,
    amount: 80,
    Icon: MoneyIcon,
    title: 'Invoice Payments',
    color: 'primary'
  }, {
    id: 2,
    amount: 150,
    Icon: CloudIcon,
    title: 'Project In Progress',
    color: 'info'
  }, {
    id: 3,
    amount: 22,
    Icon: HourGlassIcon,
    title: 'Task Not Finished',
    color: 'secondary'
  }];
  const LIST_2 = [{
    id: 1,
    amount: 150,
    Icon: UserAddIcon,
    title: 'New Leads',
    color: 'primary'
  }, {
    id: 2,
    amount: 200,
    Icon: UserBigIcon,
    title: 'Open Leads',
    color: 'warning'
  }, {
    id: 3,
    amount: 350,
    Icon: DoneIcon,
    title: 'Won Leads',
    color: 'info'
  }, {
    id: 4,
    amount: 20,
    Icon: ErrorIcon,
    title: 'Lost Leads',
    color: 'error'
  }];
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        {
        /* LEADS CONVERTED CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <LeadCard />
        </Grid>

        {
        /* DIFFERENT STATISTICS CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <LongCard list={LIST_1} />
        </Grid>

        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <Stack spacing={3}>
            {
            /* LEAD VS CUSTOMER DATA ANALYSIS CHART */
          }
            <LeadVSCustomer />

            {
            /* DIFFERENT LEADS DATA STATISTICS */
          }
            <LongCard list={LIST_2} />
          </Stack>
        </Grid>

        {
        /* PROJECT STATUS DATA VISUAL CHART */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <ProjectStatus />
        </Grid>

        {
        /* OVERVIEW DATA LIST GROUP */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <Overviews />
        </Grid>

        {
        /* LAST 6 MONTH TASK DATA VISUAL CHART */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <Tasks />
        </Grid>

        {
        /* CUSTOMER LIST DATA TABLE */
      }
        <Grid size={12}>
          <CustomerList />
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