import { useState } from 'react'; // MUI

import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider'; // MUI ICON COMPONENTS

import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeDown from '@mui/icons-material/VolumeDown'; // CUSTOM COMPONENTS

import Block from '@/components/block';
import ComponentPageLayout from '../../ComponentPageLayout'; // ==============================================================

const marks = [{
  value: 0,
  label: '0°C'
}, {
  value: 20,
  label: '20°C'
}, {
  value: 37,
  label: '37°C'
}, {
  value: 100,
  label: '100°C'
}]; // ==============================================================

const valueText = value => `${value}°C`;

const valueLabelFormat = value => marks.findIndex(mark => mark.value === value) + 1;

export default function MuiSliderPageView() {
  const [value, setValue] = useState(30);

  const handleChange = (_, newValue) => setValue(newValue);

  const [range, setRange] = useState([100, 470]);

  const handleRangeChange = (_, newValue) => {
    setRange(newValue);
  };

  return <ComponentPageLayout title="Slider">
      <Grid container spacing={3}>
        <Grid size={{
        lg: 4,
        md: 6,
        xs: 12
      }}>
          <Block title="Continuous">
            <Stack spacing={2} direction="row" sx={{
            mb: 1
          }} alignItems="center">
              <VolumeDown />
              <Slider aria-label="Volume" value={value} onChange={handleChange} />
              <VolumeUp />
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 4,
        md: 6,
        xs: 12
      }}>
          <Block title="Disabled">
            <Slider aria-label="disabled" defaultValue={30} disabled />
          </Block>
        </Grid>

        <Grid size={{
        lg: 4,
        md: 6,
        xs: 12
      }}>
          <Block title="Discrete">
            <Slider marks min={10} step={10} max={110} defaultValue={30} aria-label="Temperature" valueLabelDisplay="auto" />
          </Block>
        </Grid>

        <Grid size={{
        lg: 4,
        md: 6,
        xs: 12
      }}>
          <Block title="Restricted Values">
            <Slider step={null} marks={marks} defaultValue={20} valueLabelDisplay="auto" getAriaValueText={valueText} aria-label="Restricted values" valueLabelFormat={valueLabelFormat} />
          </Block>
        </Grid>

        <Grid size={{
        lg: 4,
        md: 6,
        xs: 12
      }}>
          <Block title="Range">
            <Slider max={999} value={range} valueLabelDisplay="on" onChange={handleRangeChange} getAriaLabel={() => 'Temperature range'} valueLabelFormat={value => `$${value}`} />
          </Block>
        </Grid>

        <Grid size={{
        lg: 4,
        md: 6,
        xs: 12
      }}>
          <Block title="Sizes">
            <Stack spacing={2}>
              <Slider size="medium" value={value} onChange={handleChange} />
              <Slider size="small" value={value} onChange={handleChange} />
            </Stack>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
}