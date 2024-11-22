// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMore from '@mui/icons-material/ExpandMore'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import FlexBox from '@/components/flexbox/FlexBox';
import { H6, Paragraph } from '@/components/typography'; // CUSTOM DUMMY DATA SET

import { CAREER_1_DATA } from '../data';
export default function Career1PageView() {
  return <Box py={3}>
      <H6 fontSize={18}>Career List</H6>
      <Paragraph color="text.secondary" mb={3}>
        You sit down. You stare at your screen. The cursor blinks
      </Paragraph>

      <Grid container spacing={3}>
        {CAREER_1_DATA.map(({
        id,
        title,
        description,
        items
      }) => <Grid size={{
        md: 6,
        xs: 12
      }} key={id}>
            <Card className="p-3">
              <H6 fontSize={16}>{title}</H6>
              <Paragraph color="text.secondary" mb={4}>
                {description}
              </Paragraph>

              {items.map((item, i) => <Accordion key={item} defaultExpanded={i === 0}>
                  <AccordionSummary expandIcon={<ExpandMore />}>{item}</AccordionSummary>

                  <AccordionDetails>
                    <Box component="ul" pl={2}>
                      <Box component="li" pb={1}>
                        Experience with JavaScript.
                      </Box>

                      <Box component="li" pb={1}>
                        Good time-management skills.
                      </Box>

                      <Box component="li" pb={1}>
                        Experience with React.
                      </Box>

                      <Box component="li" pb={1}>
                        Experience with HTML / CSS.
                      </Box>

                      <Box component="li" pb={1}>
                        Experience with REST API.
                      </Box>

                      <Box component="li" pb={1}>
                        Git knowledge is a plus.
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>)}

              <FlexBox alignItems="center" gap={2} mt={3}>
                <Button size="small" LinkComponent={Link} href="/career/apply">
                  Apply
                </Button>

                <Button size="small" variant="outlined" color="secondary">
                  Cancel
                </Button>
              </FlexBox>
            </Card>
          </Grid>)}
      </Grid>
    </Box>;
}