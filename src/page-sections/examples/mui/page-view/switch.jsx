import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel'; // CUSTOM COMPONENTS

import Block from '@/components/block';
import ComponentPageLayout from '../../ComponentPageLayout';
export default function MuiSwitchPageView() {
  return <ComponentPageLayout title="Switch">
      <Grid container spacing={3}>
        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Basic">
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={3}>
              <Switch defaultChecked />
              <Switch />
              <Switch disabled defaultChecked />
              <Switch disabled />
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Sizes">
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={3}>
              <Switch size="medium" defaultChecked />
              <Switch size="small" />
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Colors">
            <Stack alignContent="center" flexWrap="wrap">
              <FormControlLabel label="Default" control={<Switch color="default" defaultChecked />} />

              <FormControlLabel label="Info" control={<Switch color="info" defaultChecked />} />
              <FormControlLabel control={<Switch color="error" defaultChecked />} label="Error" />

              <FormControlLabel label="Primary" control={<Switch color="primary" defaultChecked />} />
              <FormControlLabel label="Success" control={<Switch color="success" defaultChecked />} />
              <FormControlLabel label="Warning" control={<Switch color="warning" defaultChecked />} />
            </Stack>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
}