import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { H6, Paragraph } from '@/components/typography'; // STYLED COMPONENTS

import { HeaderTop, TicketWrapper } from './styles';
export default function Footer() {
  return <footer>
      <HeaderTop>
        <Container maxWidth="xl">
          <Box pt={{
          sm: 12,
          xs: 8
        }} pb={{
          sm: 24,
          xs: 20
        }}>
            <H6 mb={4} color="white" fontWeight={700} lineHeight={1.4} fontSize={{
            sm: 36,
            xs: 27
          }}>
              Streamline your workflow <br /> with Uko
            </H6>

            <FlexBox alignItems="center" gap={2}>
              <Button size="large" color="inherit" className="buy-btn" href='https://mui.com/store/items/uko-client-admin-dashboard/'>
                Buy Now
              </Button>

              <Button size="large" color="inherit" variant="outlined" className="preview-btn" LinkComponent="a" href="/dashboard">
                Live Preview
              </Button>
            </FlexBox>
          </Box>

          <img alt="footer" src="/static/landing/illustration.svg" className="illustration" />
        </Container>
      </HeaderTop>

      <Container>
        <TicketWrapper>
          <Paragraph fontSize={{
          sm: 24,
          xs: 18
        }} fontWeight={600} mb={3}>
            Have any questions about our template?
          </Paragraph>

          <FlexBox justifyContent="center" alignItems="center" gap={2}>
            <Button LinkComponent="a" href="https://support.ui-lib.com/" target="_blank">
              Submit Ticket
            </Button>

            <Button target="_blank" LinkComponent="a" variant="outlined" href="mailto:support@ui-lib.com?subject=Uko React Query">
              Send an email
            </Button>
          </FlexBox>
        </TicketWrapper>
      </Container>

      <Paragraph fontSize={16} textAlign="center" py={6}>
        Copyright ©{' '}
        <Box component="a" href="https://ui-lib.com" target="_blank">
          UI Lib
        </Box>
        . All rights reserved
      </Paragraph>
    </footer>;
}