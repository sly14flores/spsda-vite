import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField'; // MUI ICON COMPONENT

import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'; // CUSTOM COMPONENTS

import FlexBetween from '@/components/flexbox/FlexBetween';
import { H6, Paragraph, Small } from '@/components/typography'; // CUSTOM DUMMY DATA SET

import { PREFERENCES } from './data';
export default function Preferences() {
  return <Card>
      <H6 fontSize={14} padding={3}>
        General Preferences
      </H6>

      <Divider />

      <Box padding={3}>
        <Grid container spacing={4}>
          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField select fullWidth value="english" label="Language" variant="outlined" placeholder="Language" slotProps={{
            select: {
              native: true,
              IconComponent: KeyboardArrowDown
            }
          }}>
              <option value="english">English</option>
              <option value="bangla">Bangla</option>
              <option value="hindi">Hindi</option>
            </TextField>
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField variant="outlined" label="Time Zone" fullWidth value="12:00 AM" />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <FlexBetween>
              <div>
                <Paragraph fontWeight={500}>Early release</Paragraph>
                <Small color="text.secondary">Get included on new features.</Small>
              </div>

              <Switch defaultChecked />
            </FlexBetween>

            <FlexBetween mt={2}>
              <div>
                <Paragraph fontWeight={500}>See info about people who view my profile</Paragraph>
                <Small color="text.secondary">More about viewer info.</Small>
              </div>

              <Switch defaultChecked />
            </FlexBetween>
          </Grid>
        </Grid>
      </Box>

      {
      /* EMAIL PREFERENCES SECTION */
    }
      <H6 fontSize={14} p={3} pt={0}>
        Email Preferences
      </H6>

      <Divider />

      <Stack spacing={2} p={3} pl={2}>
        {PREFERENCES.map(({
        id,
        title,
        subtitle,
        checked
      }) => <Stack direction="row" alignItems="center" spacing={1} key={id}>
            <Checkbox checked={checked} />

            <div>
              <Paragraph fontWeight={500} lineHeight={1}>
                {title}
              </Paragraph>

              <Small color="text.secondary">{subtitle}</Small>
            </div>
          </Stack>)}
      </Stack>

      <Stack direction="row" spacing={3} padding={3}>
        <Button variant="contained">Save Changes</Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </Card>;
}