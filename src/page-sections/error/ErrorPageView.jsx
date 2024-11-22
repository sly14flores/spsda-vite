import Button from '@mui/material/Button';
import Container from '@mui/material/Container'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import { Paragraph } from '@/components/typography';
import SectionTitle from '@/components/section-title';
import GradientBackground from '@/components/gradient-background'; // STYLED COMPONENT

import { MainContent } from './styles';
export default function ErrorPageView() {
  return <GradientBackground>
      <Container>
        <MainContent>
          <SectionTitle centered title="Page Not Found!" />

          <Paragraph fontSize={18} color="text.secondary">
            Whoops! It seems like we've unplugged this page by accident. 🔌🙈
            <br />
            <br /> <strong>#404NotFound</strong>
          </Paragraph>

          <div className="img-wrapper">
            <img src="/static/pages/error.svg" alt="error" width="100%" />
          </div>

          <Button size="large" LinkComponent={Link} href="/">
            Go Home
          </Button>
        </MainContent>
      </Container>
    </GradientBackground>;
}