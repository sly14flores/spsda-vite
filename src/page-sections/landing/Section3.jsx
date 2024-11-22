import { useNavigate } from 'react-router-dom'; // MUI

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Alert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import AvatarGroup from '@mui/material/AvatarGroup';
import LinearProgress from '@mui/material/LinearProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress'; // MUI ICON COMPONENTS

import Add from '@mui/icons-material/Add';
import Error from '@mui/icons-material/Error';
import Delete from '@mui/icons-material/Delete';
import KeyboardTab from '@mui/icons-material/KeyboardTab';
import Masonry from '@mui/lab/Masonry'; // CUSTOM COMPONENTS

import { H2, Paragraph } from '@/components/typography'; // CUSTOM PAGE SECTION COMPONENTS

import LiveUser from '@/page-sections/dashboards/analytics/LiveUser';
import ReturnRate from '@/page-sections/dashboards/ecommerce/ReturnRate';
import CompleteGoal from '@/page-sections/dashboards/analytics/CompleteGoal';
import DailyVisitors from '@/page-sections/dashboards/ecommerce/DailyVisitors';
import SessionBrowser from '@/page-sections/dashboards/analytics/SessionBrowser';
export default function Section3() {
  const navigate = useNavigate();
  return <Container maxWidth="lg" sx={{
    mt: {
      sm: 24,
      xs: 12
    }
  }}>
      <Grid container spacing={2}>
        <Grid size={{
        lg: 5,
        md: 6,
        xs: 12
      }}>
          <Box maxWidth={450} position="sticky" top={0} pt={4} mb={{
          xs: 4,
          mb: 0
        }}>
            <H2 fontSize={36}>Vast collection of components</H2>
            <Paragraph mt={1} mb={3} fontSize={18} color="text.secondary">
              Save thousands of development hours with Uko’s well crafted features and clean code
            </Paragraph>

            <Button color="secondary" variant="outlined" startIcon={<KeyboardTab />} onClick={() => navigate('/components')}>
              Browse components
            </Button>
          </Box>
        </Grid>

        <Grid size={{
        lg: 7,
        md: 6,
        xs: 12
      }}>
          <Stack spacing={4}>
            <Alert variant="outlined" severity="info">
              This is an info alert — check it out!
            </Alert>

            <Alert severity="error" icon={<Error />} action={<Stack className="btn-group" direction="row">
                  <ButtonBase>UNDO</ButtonBase>
                  <ButtonBase>Action</ButtonBase>
                </Stack>}>
              This is an error alert — check it out!
            </Alert>

            <Stack direction="row" alignItems="center" spacing={2} rowGap={2}>
              <Button>Primary</Button>
              <Button variant="outlined" color="warning">
                Warning
              </Button>

              <Button color="success" startIcon={<Add />}>
                With Icon
              </Button>

              <Button variant="text">Click Me</Button>

              <LinearProgress />
            </Stack>

            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/user/avatar.png" />
              <Avatar variant="rounded" alt="Remy Sharp" src="/static/user/user-13.png" sx={{
              width: 60,
              height: 60
            }} />

              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="/static/user/user-13.png" />
                <Avatar alt="Travis Howard" src="/static/user/user-17.png" />
                <Avatar alt="Travis Howard" src="/static/user/user-18.png" />
                <Avatar alt="Travis Howard" src="/static/user/user-19.png" />
                <Avatar alt="Travis Howard" src="/static/user/user-20.png" />
                <Avatar alt="Travis Howard" src="/static/user/user-20.png" />
              </AvatarGroup>

              <Chip avatar={<Avatar alt="Natacha" src="/static/user/user-13.png" />} label="Avatar" color="error" />

              <Chip label="Chip Outlined" variant="outlined" color="warning" />

              <CircularProgress color="success" />

              <Tooltip title="Delete">
                <IconButton>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={2}>
              <div>
                <FormControlLabel control={<Checkbox size="small" color="error" defaultChecked />} label="Checkbox" />
              </div>

              <div>
                <FormControlLabel control={<Radio size="small" color="success" defaultChecked />} label="Radio" />
              </div>

              <div>
                <FormControlLabel control={<Switch size="small" defaultChecked />} label="Switch" />
              </div>

              <div>
                <FormControlLabel control={<Checkbox size="small" color="warning" indeterminate defaultChecked />} label="Indeterminate" />
              </div>
            </Stack>

            <Masonry columns={{
            sm: 2,
            xs: 1
          }}>
              <div>
                <SessionBrowser />
              </div>

              <CompleteGoal chart="area" />

              <DailyVisitors />

              <div>
                <LiveUser />
              </div>

              <div>
                <ReturnRate />
              </div>
            </Masonry>
          </Stack>
        </Grid>
      </Grid>
    </Container>;
}