import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Alert from '@mui/material/Alert';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import AlertTitle from '@mui/material/AlertTitle';
import FormControlLabel from '@mui/material/FormControlLabel'; // CUSTOM COMPONENTS

import Keys from './components/Keys';
import LoginSessions from './components/LoginSessions';
import Link from '@/components/link';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { H5, H6, Paragraph } from '@/components/typography'; // CUSTOM ICON COMPONENTS

import NotificationAlert from '@/icons/NotificationAlert';
export default function ApiKeys() {
  return <Card>
      <FlexBetween px={3} py={2}>
        <H6 fontSize={14}>API Overview</H6>

        <FormControlLabel label="Test Mode" control={<Switch defaultChecked />} slotProps={{
        typography: {
          fontSize: 14
        }
      }} />
      </FlexBetween>

      <Divider />

      <Box padding={3}>
        {
        /* FEATURE SECTION */
      }
        <Grid container spacing={4} mb={3}>
          <Grid size={{
          md: 6,
          xs: 12
        }}>
            <H5 fontSize={14} mb={0.5}>
              How to set Api
            </H5>

            <Paragraph fontSize={12} mb={2}>
              Use images to enhance your post, improve its flow, add humor and explain complex
              topics
            </Paragraph>

            <Button variant="contained">Get Started</Button>
          </Grid>

          <Grid size={{
          md: 6,
          xs: 12
        }}>
            <H5 fontSize={14} mb={0.5}>
              Developer Tools
            </H5>

            <Paragraph fontSize={12} mb={2}>
              Plan your blog post by choosing a topic, creating an outline conduct research, and
              checking facts
            </Paragraph>

            <Button variant="contained">Create Rule</Button>
          </Grid>
        </Grid>

        {
        /* ALERT SECTION */
      }
        <Alert severity="info" variant="outlined" icon={<NotificationAlert />}>
          <AlertTitle>Two Factor Authentication</AlertTitle>
          Adds an extra layer of security to your account. To log in, in you'll need to provide a 4
          digit amazing and create outstanding products to serve your clients{' '}
          <Link href="#">Learn More</Link>.
        </Alert>
      </Box>

      {
      /* LOGIN SESSION TABLE SECTION */
    }
      <FlexBetween px={3} py={2}>
        <H5 fontSize={14}>Login Sessions</H5>

        <Select defaultValue={2022} size="small">
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
        </Select>
      </FlexBetween>

      <LoginSessions />

      <Divider sx={{
      my: 2
    }} />

      {
      /* API KEYS TABLE SECTION */
    }
      <H5 fontSize={14} p={3}>
        API Keys
      </H5>

      <Keys />
    </Card>;
}