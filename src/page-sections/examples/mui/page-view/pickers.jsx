import { useState } from 'react'; // MUI

import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker, DateTimePicker, MobileDatePicker, MobileTimePicker, StaticDatePicker, StaticTimePicker, DesktopDatePicker, DesktopTimePicker, MobileDateTimePicker, DesktopDateTimePicker } from '@mui/x-date-pickers'; // CUSTOM COMPONENTS

import Block from '@/components/block';
import ComponentPageLayout from '../../ComponentPageLayout';
export default function MuiPickersPageView() {
  const [value, setValue] = useState('1');

  const handleChange = (_, newValue) => setValue(newValue);

  const [selectDate, setSelectedDate] = useState(new Date(2023, 1, 5));
  const [selectTime, setSelectTime] = useState(new Date(2023, 1, 5));
  return <ComponentPageLayout title="Date/Time Pickers" fullLink="https://mui.com/x/react-date-pickers">
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab value="1" label="Date Picker" />
          <Tab value="2" label="Time Picker" />
          <Tab value="3" label="Date Time Picker" />
        </TabList>

        <TabPanel value="1">
          <Grid container spacing={3}>
            <Grid size={{
            lg: 6,
            xs: 12
          }}>
              <Block title="Basic">
                <Stack spacing={4}>
                  <DesktopDatePicker label="For Desktop" value={selectDate} onChange={newValue => setSelectedDate(newValue)} slotProps={{
                  textField: {
                    size: 'medium'
                  }
                }} />

                  <MobileDatePicker label="For Mobile" value={selectDate} onChange={newValue => setSelectedDate(newValue)} slotProps={{
                  textField: {
                    size: 'medium'
                  }
                }} />

                  <DatePicker openTo="year" label="Responsive" views={['year', 'month', 'day']} value={selectDate} onChange={newValue => setSelectedDate(newValue)} slotProps={{
                  textField: {
                    size: 'medium'
                  }
                }} />
                </Stack>
              </Block>

              <Block title="Static Date" sx={{
              mt: 3
            }}>
                <Stack spacing={4}>
                  <DatePicker views={['year']} label="Year only" value={selectDate} onChange={newValue => setSelectedDate(newValue)} slotProps={{
                  textField: {
                    size: 'medium',
                    fullWidth: true
                  }
                }} />
                  <DatePicker views={['year', 'month']} label="Year and Month" minDate={new Date('2012-03-01')} maxDate={new Date('2023-06-01')} value={selectDate} onChange={newValue => setSelectedDate(newValue)} slotProps={{
                  textField: {
                    size: 'medium',
                    fullWidth: true
                  }
                }} />
                  <DatePicker openTo="year" views={['year', 'month', 'day']} label="Year, month and date" value={selectDate} onChange={newValue => setSelectedDate(newValue)} slotProps={{
                  textField: {
                    size: 'medium',
                    fullWidth: true
                  }
                }} />
                  <DatePicker views={['day', 'month', 'year']} label="Invert the order of views" value={selectDate} onChange={newValue => setSelectedDate(newValue)} slotProps={{
                  textField: {
                    size: 'medium',
                    fullWidth: true
                  }
                }} />
                  <DatePicker views={['day']} label="Just date" value={selectDate} onChange={newValue => setSelectedDate(newValue)} slotProps={{
                  textField: {
                    size: 'medium',
                    fullWidth: true
                  }
                }} />
                </Stack>
              </Block>
            </Grid>

            <Grid size={{
            lg: 6,
            xs: 12
          }}>
              <Block title="Static Date">
                <Stack spacing={4}>
                  <StaticDatePicker openTo="day" orientation="landscape" value={selectDate} onChange={newValue => setSelectedDate(newValue)} // renderInput={(params) => <TextField {...params} fullWidth size="medium" />}
                slotProps={{}} />
                </Stack>
              </Block>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value="2">
          <Grid container spacing={3}>
            <Grid size={{
            lg: 6,
            xs: 12
          }}>
              <Block title="Basic">
                <Stack spacing={4}>
                  <TimePicker label="With AM/PM (12 hours)" value={selectTime} onChange={newValue => setSelectTime(newValue)} slotProps={{
                  textField: {
                    size: 'medium'
                  }
                }} />

                  <TimePicker ampm={false} label="Without AM/PM (24 hours)" value={selectTime} onChange={newValue => setSelectTime(newValue)} slotProps={{
                  textField: {
                    size: 'medium'
                  }
                }} />
                </Stack>
              </Block>

              <Block title="Static" sx={{
              mt: 3
            }}>
                <StaticTimePicker ampm orientation="landscape" openTo="hours" value={selectTime} onChange={newValue => setSelectTime(newValue)} // slotProps={{ textField: { size: 'medium' } }}
              />
              </Block>
            </Grid>

            <Grid size={{
            lg: 6,
            xs: 12
          }}>
              <Block title="Responsiveness">
                <Stack spacing={4}>
                  <MobileTimePicker label="For mobile" value={selectTime} onChange={newValue => setSelectTime(newValue)} slotProps={{
                  textField: {
                    size: 'medium'
                  }
                }} />

                  <DesktopTimePicker label="For desktop" value={selectTime} onChange={newValue => setSelectTime(newValue)} slotProps={{
                  textField: {
                    size: 'medium'
                  }
                }} />

                  <TimePicker value={selectTime} onChange={newValue => setSelectTime(newValue)} slotProps={{
                  textField: {
                    size: 'medium'
                  }
                }} />
                </Stack>
              </Block>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value="3">
          <Grid container spacing={3}>
            <Grid size={{
            lg: 6,
            xs: 12
          }}>
              <Block title="Basic">
                <DateTimePicker label="DateTimePicker" value={selectTime} onChange={newValue => setSelectTime(newValue)} slotProps={{
                textField: {
                  size: 'medium',
                  fullWidth: true
                }
              }} />
              </Block>
            </Grid>

            <Grid size={{
            lg: 6,
            xs: 12
          }}>
              <Block title="Responsiveness">
                <Stack spacing={3}>
                  <MobileDateTimePicker label="For mobile" value={selectTime} onChange={newValue => setSelectTime(newValue)} slotProps={{
                  textField: {
                    size: 'medium',
                    fullWidth: true
                  }
                }} />

                  <DesktopDateTimePicker label="For desktop" value={selectTime} onChange={newValue => setSelectTime(newValue)} slotProps={{
                  textField: {
                    size: 'medium',
                    fullWidth: true
                  }
                }} />

                  <DateTimePicker label="Responsive" value={selectTime} onChange={newValue => setSelectTime(newValue)} slotProps={{
                  textField: {
                    size: 'medium',
                    fullWidth: true
                  }
                }} />
                </Stack>
              </Block>
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </ComponentPageLayout>;
}