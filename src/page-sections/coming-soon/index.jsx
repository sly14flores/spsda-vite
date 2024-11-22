import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField'; // CUSTOM COMPONENTS

import { Paragraph } from '@/components/typography';
import SectionTitle from '@/components/section-title';
import GradientBackground from '@/components/gradient-background'; // STYLED COMPONENT

import { MainContent } from './styles';
export default function ComingSoonPageView() {
  return <GradientBackground>
      <Container>
        <MainContent>
          <SectionTitle centered title="Coming Soon!" />
          <Paragraph fontSize={18} color="text.secondary">
            Stay tuned for the big reveal
          </Paragraph>

          <div className="img-wrapper">
            <img src="/static/pages/coming-soon.svg" alt="maintenance" width="100%" />
          </div>

          <TextField placeholder="Enter your email" slotProps={{
          input: {
            endAdornment: <Button>Notify Me</Button>
          }
        }} />
        </MainContent>
      </Container>
    </GradientBackground>;
}