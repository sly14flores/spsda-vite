import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography'; // CUSTOM ICON COMPONENTS

import Recycle from '@/icons/Recycle';
import Database from '@/icons/Database';
import Minimize from '@/icons/Minimize'; // STYLED COMPONENT

const StyledCard = styled(Card)(({
  theme
}) => ({
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(3)
}));
export default function Feature() {
  return <Grid container spacing={3}>
      {DATA.map(({
      Icon,
      id,
      title,
      description
    }) => <Grid size={{
      md: 4,
      xs: 12
    }} key={id}>
          <StyledCard>
            <Icon fontSize="large" color="action" />
            <H6 fontSize={18} py={1}>
              {title}
            </H6>

            <Paragraph color="text.secondary">{description}</Paragraph>
          </StyledCard>
        </Grid>)}
    </Grid>;
} // CUSTOM DUMMY DATA

const DATA = [{
  id: '0001',
  title: 'Easy',
  Icon: Minimize,
  description: 'Building and deploying should be as easy as a single tap.'
}, {
  id: '0010',
  Icon: Recycle,
  title: 'Universal',
  description: 'To connect the world, sites should be fast from everywhere.'
}, {
  id: '0100',
  Icon: Database,
  title: 'Accessible',
  description: 'Great care in user experience and design enables everyone.'
}];