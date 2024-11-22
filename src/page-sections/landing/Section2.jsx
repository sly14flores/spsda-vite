import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container'; // CUSTOM COMPONENTS

import { H2, H6, Paragraph } from '@/components/typography'; // DUMMY DATA

const LIST_1 = [{
  id: 1,
  image: '/static/landing/icons/award.svg',
  title: 'Crafted by Professionals',
  description: `Expertly crafted by professionals with an in-depth understanding of developer challenges.`
}, {
  id: 2,
  image: '/static/landing/icons/logos.svg',
  title: 'Modern Technologies',
  description: `Expertly crafted by professionals with an in-depth understanding of developer challenges.`
}, {
  id: 3,
  image: '/static/landing/icons/check_bucket.svg',
  title: 'Clean Code',
  description: `Expertly crafted by professionals with an in-depth understanding of developer challenges.`
}];
const LIST_2 = [{
  id: 1,
  image: '/static/landing/icons/brush.svg',
  title: 'Design Files',
  description: `Expertly crafted by professionals with an in-depth understanding of developer challenges.`
}, {
  id: 2,
  image: '/static/landing/icons/recovery.svg',
  title: 'Flexible Structure',
  description: `Expertly crafted by professionals with an in-depth understanding of developer challenges.`
}, {
  id: 3,
  image: '/static/landing/icons/paint_bucket.svg',
  title: 'Easy to Customize',
  description: `Expertly crafted by professionals with an in-depth understanding of developer challenges.`
}];
export default function Section2() {
  return <Container maxWidth="lg" sx={{
    mt: {
      sm: 12,
      xs: 6
    }
  }}>
      <Grid container spacing={2}>
        <Grid size={{
        lg: 5,
        xs: 12
      }}>
          <Box maxWidth={450} position="sticky" top={0} pt={4}>
            <H2 fontSize={36}>Core Features</H2>
            <Paragraph mt={1} fontSize={18} color="text.secondary">
              Save thousands of development hours with Uko’s well crafted features and clean code
            </Paragraph>
          </Box>
        </Grid>

        <Grid container spacing={4} size={{
        lg: 7,
        xs: 12
      }}>
          <Grid size={{
          lg: 6,
          xs: 12
        }}>
            <Stack mt={{
            lg: 12,
            xs: 6
          }} spacing={{
            md: 4,
            xs: 3
          }} direction={{
            lg: 'column',
            md: 'row',
            xs: 'column'
          }}>
              {LIST_1.map(item => <FeatureCard {...item} key={item.id} />)}
            </Stack>
          </Grid>

          <Grid size={{
          lg: 6,
          xs: 12
        }}>
            <Stack spacing={{
            md: 4,
            xs: 3
          }} direction={{
            lg: 'column',
            md: 'row',
            xs: 'column'
          }}>
              {LIST_2.map(item => <FeatureCard {...item} key={item.id} />)}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Container>;
} // ==============================================================

function FeatureCard(props) {
  return <Card sx={{
    textAlign: 'center',
    padding: {
      xl: 6,
      lg: 5,
      md: 4,
      xs: 6
    }
  }}>
      <Box component="img" src={props.image} alt="award" py={6} />
      <H6 fontSize={18}>{props.title}</H6>
      <Paragraph fontSize={16} color="grey.500" mt={2}>
        {props.description}
      </Paragraph>
    </Card>;
}