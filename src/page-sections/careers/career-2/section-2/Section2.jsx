import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import SectionTitle from '@/components/section-title'; // STYLED COMPONENT

import { StyledCard, StyledContainer } from './styles'; // CUSTOM DUMMY DATA

import { JOBS } from '../data';
export default function Section2() {
  return <StyledContainer maxWidth="lg">
      <div className="heading">
        <SectionTitle mb={3} centered title="Available Jobs" />
        <p>Join our dynamic team of professionals and shape the future of IT Industry.</p>
      </div>

      {
      /* JOB CARDS */
    }
      <Grid container spacing={3}>
        {JOBS.map(({
        id,
        title
      }) => <Grid size={{
        lg: 4,
        sm: 6,
        xs: 12
      }} key={id}>
            <StyledCard>
              <h6 className="title">{title}</h6>

              <p className="description">
                We are actively seeking a talented and passionate software engineer to join our
                team.
              </p>

              <Stack mb={3} rowGap={1} columnGap={1} flexWrap="wrap" direction="row" alignItems="center">
                <Chip color="secondary" label="Full-time" />
                <Chip color="secondary" label="Remote" />
                <Chip color="secondary" label="$500/monthly" />
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <Button variant="outlined" LinkComponent={Link} href={`/career/${title}`}>
                  View Details
                </Button>

                <Button LinkComponent={Link} href="/career/apply">
                  Apply this job
                </Button>
              </Stack>
            </StyledCard>
          </Grid>)}
      </Grid>
    </StyledContainer>;
}