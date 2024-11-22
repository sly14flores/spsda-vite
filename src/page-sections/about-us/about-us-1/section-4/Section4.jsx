import Container from '@mui/material/Container'; // CUSTOM COMPONENTS

import Carousel from '@/components/carousel';
import { Paragraph } from '@/components/typography';
import SectionTitle from '@/components/section-title'; // STYLED COMPONENTS

import { StyledRoot, TestimonialItem } from './styles';
export default function Section4() {
  return <StyledRoot>
      <Container maxWidth="lg">
        <SectionTitle centered title="What Our Customer Says" mb={6} />

        <Carousel dots slidesToShow={1}>
          {[1, 2, 3].map(item => <TestimonialItem key={item}>
              <img src="/static/quotation.svg" alt="Quotation" className="quotation" />

              <p className="review-text">
                Uko Admin Template is a user-friendly website template with a modern design and
                responsive layout. It offers pre-built customizable components and modules to create
                a unique admin interface for your web applications.
              </p>

              <div className="reviewer-img">
                <img src="/static/user/user-24.png" alt="Quotation" width="100%" />
              </div>

              <Paragraph fontWeight={600} fontSize={18}>
                Lucian Obrien
              </Paragraph>

              <Paragraph color="text.secondary">UX Designer</Paragraph>
            </TestimonialItem>)}
        </Carousel>
      </Container>
    </StyledRoot>;
}