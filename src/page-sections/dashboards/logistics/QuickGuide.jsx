import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph } from '@/components/typography';
export default function QuickGuide() {
  return <Card className="p-3">
      <Grid container spacing={3} alignItems="center">
        <Grid size={{
        sm: 5,
        xs: 12
      }}>
          <Box maxWidth={260} margin="auto">
            <Box width="100%" display="block" component="img" src="/static/illustration/quick-gude.svg" />
          </Box>
        </Grid>

        <Grid size={{
        sm: 7,
        xs: 12
      }}>
          <Box p={2}>
            <Paragraph lineHeight={1.3} fontSize={22} fontWeight={600}>
              Logistics is simple but not easy.
            </Paragraph>

            <Paragraph mt={1} color="text.secondary">
              The information about package is as important as the delivery package itself.
            </Paragraph>

            <FlexBox mt={6} gap={2}>
              <Button>Start Now</Button>
              <Button color="secondary">Quick Guide</Button>
            </FlexBox>
          </Box>
        </Grid>
      </Grid>
    </Card>;
}