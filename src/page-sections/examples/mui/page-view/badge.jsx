import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Mail from '@mui/icons-material/Mail'; // CUSTOM COMPONENT

import Block from '@/components/block';
import ComponentPageLayout from '../../ComponentPageLayout';
const shapeStyles = {
  bgcolor: 'grey.400',
  width: 40,
  height: 40
};
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = <Box component="span" sx={{ ...shapeStyles,
  borderRadius: '50%'
}} />;
export default function MuiBadgePageView() {
  return <ComponentPageLayout title="Badge">
      <Grid container spacing={3}>
        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Basic">
            <Stack direction="row" spacing={2} justifyContent="center">
              <Badge badgeContent={4} color="default">
                <Mail />
              </Badge>

              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>

              <Badge badgeContent={4} color="info">
                <Mail />
              </Badge>

              <Badge badgeContent={4} color="primary">
                <Mail />
              </Badge>

              <Badge badgeContent={4} color="secondary">
                <Mail />
              </Badge>

              <Badge badgeContent={4} color="success">
                <Mail />
              </Badge>

              <Badge badgeContent={4} color="warning">
                <Mail />
              </Badge>
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Maximum Value">
            <Stack direction="row" spacing={5} justifyContent="center">
              <Badge badgeContent={100} max={99} color="primary">
                <Mail />
              </Badge>

              <Badge badgeContent={1000} max={999} color="primary">
                <Mail />
              </Badge>

              <Badge badgeContent={10000} max={9999} color="primary">
                <Mail />
              </Badge>
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Dot Badge">
            <Stack direction="row" spacing={5} justifyContent="center">
              <Badge color="primary" variant="dot">
                <Mail />
              </Badge>

              <Badge color="primary" variant="dot">
                Uko
              </Badge>
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Badge Overlap">
            <Stack direction="row" spacing={5} justifyContent="center">
              <Badge color="primary" badgeContent="">
                {rectangle}
              </Badge>

              <Badge color="primary" variant="dot">
                {rectangle}
              </Badge>

              <Badge color="primary" overlap="circular" badgeContent="">
                {circle}
              </Badge>

              <Badge color="primary" overlap="circular" variant="dot">
                {circle}
              </Badge>
            </Stack>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
}