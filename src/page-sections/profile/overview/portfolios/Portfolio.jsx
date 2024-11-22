import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add'; // CUSTOM COMPONENTS

import { H6 } from '@/components/typography';
import PortfolioItem from './PortfolioItem';
import FlexBetween from '@/components/flexbox/FlexBetween';
export default function Portfolio() {
  return <Card className="p-3">
      <FlexBetween mb={3}>
        <H6 fontSize={16}>Portfolio</H6>

        <Button color="secondary" variant="outlined" startIcon={<Add />}>
          Add New
        </Button>
      </FlexBetween>

      <Grid container spacing={3}>
        <Grid size={{
        lg: 4,
        md: 6,
        xs: 12
      }}>
          <PortfolioItem tag="Minimal" title="Hollow Purple" date="12.00 Nov 21, 2021" imgLink="/static/portfolio/1.png" />
        </Grid>

        <Grid size={{
        lg: 4,
        md: 6,
        xs: 12
      }}>
          <PortfolioItem tag="Dark" title="Red Blood" date="12.00 Nov 21, 2021" imgLink="/static/portfolio/2.png" />
        </Grid>

        <Grid size={{
        lg: 4,
        md: 6,
        xs: 12
      }}>
          <PortfolioItem tag="Light" title="Lime Blue" date="12.00 Nov 21, 2021" imgLink="/static/portfolio/3.png" />
        </Grid>
      </Grid>
    </Card>;
}