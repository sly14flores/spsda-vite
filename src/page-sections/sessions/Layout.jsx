import { Fragment } from 'react'; // MUI

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider'; // CUSTOM COMPONENTS

import { H3, H6, Paragraph } from '@/components/typography';
import FlexRowAlign from '@/components/flexbox/FlexRowAlign'; // =========================================================================

// =========================================================================
export default function Layout({
  children,
  login
}) {
  return <Grid container height="100%">
      <Grid size={{
      md: 6,
      xs: 12
    }}>
        <FlexRowAlign bgcolor="primary.main" height="100%">
          <Box color="white" p={6} maxWidth={700}>
            {login ? <H3 fontWeight={600}>Hi, Welcome Back!</H3> : <Fragment>
                <Box width={80} alt="uko" component="img" src="/static/logo/logo-white-svg.svg" />

                <H3 mt={3} fontWeight={600} maxWidth={450}>
                  Technology is best when it brings people together.
                </H3>

                <Divider sx={{
              borderColor: 'primary.400',
              borderWidth: 1,
              my: 3
            }} />
              </Fragment>}

            <Box my={4}>
              <H6 fontSize={20}>You are in a good company</H6>
              <Paragraph>
                A product is something a brand is something that is bought by the customer.
              </Paragraph>
            </Box>

            <img src="/static/footer-brands.svg" alt="footer" />
          </Box>
        </FlexRowAlign>
      </Grid>

      <Grid size={{
      md: 6,
      xs: 12
    }}>
        <FlexRowAlign bgcolor="background.paper" height="100%">
          {children}
        </FlexRowAlign>
      </Grid>
    </Grid>;
}