import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'; // CUSTOM COMPONENTS

import SectionTitle from '@/components/section-title'; // STYLED COMPONENT

import { StyledRoot, StyledTextField } from './styles';
export default function Section2() {
  return <StyledRoot>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{
          md: 6,
          xs: 12
        }}>
            <SectionTitle title="Say Hello!" mb={6} />

            <form>
              <Stack spacing={3} mb={5}>
                <StyledTextField fullWidth placeholder="Name" name="name" />
                <StyledTextField fullWidth placeholder="Email" name="email" type="email" />
                <StyledTextField fullWidth placeholder="Subject" name="subject" />
                <StyledTextField multiline fullWidth rows={4} name="message" placeholder="Message" />
              </Stack>

              <Button>Submit</Button>
            </form>
          </Grid>

          <Grid size={{
          md: 6,
          xs: 12
        }}>
            <Card>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10171.65762602485!2d-74.04850673629463!3d40.71687384971685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1683481372848!5m2!1sen!2sbd" width="100%" height="550" loading="lazy" className="i-frame" />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>;
}