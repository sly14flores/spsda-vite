import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import useTheme from '@mui/material/styles/useTheme'; // MUI ICON COMPONENTS

import Euro from '@mui/icons-material/Euro';
import AttachMoney from '@mui/icons-material/AttachMoney';
import CurrencyPound from '@mui/icons-material/CurrencyPound';
import merge from 'lodash.merge';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import ListItem from './shared/ListItem';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { Paragraph } from '@/components/typography'; // CUSTOM UTILS METHODS

import { baseChartOptions } from '@/utils/baseChartOptions'; // DUMMY DATA SET

const DATA = [{
  id: 1,
  title: 'USD',
  Icon: AttachMoney,
  value1: 94.65,
  value2: 2.5
}, {
  id: 2,
  title: 'EURO',
  Icon: Euro,
  value1: 26.37,
  value2: -1.56
}, {
  id: 3,
  title: 'GBP',
  Icon: CurrencyPound,
  value1: 55.24,
  value2: 3.23
}];
export default function CurrentCurrencyTwo() {
  const theme = useTheme(); // REACT CHART CATEGORIES LABEL

  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: 'Tasks',
    data: [22, 30, 46, 50, 46, 30, 22]
  }]; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    stroke: {
      show: false
    },
    xaxis: {
      categories: chartCategories
    },
    colors: [theme.palette.divider, theme.palette.primary.main],
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
        columnWidth: '40%',
        borderRadiusApplication: 'end'
      }
    },
    tooltip: {
      y: {
        formatter: (val, {
          dataPointIndex,
          w
        }) => {
          return `${w.globals.labels[dataPointIndex]} : ${val}`;
        }
      }
    }
  });
  return <Card className="p-3 h-full">
      <Grid container spacing={2}>
        <Grid size={{
        sm: 6,
        xs: 12
      }}>
          <Paragraph mb={2} fontSize={18} fontWeight={500}>
            Current Currency
          </Paragraph>

          <Stack spacing={2}>
            {DATA.map(({
            Icon,
            id,
            title,
            value1,
            value2
          }) => <FlexBetween key={id}>
                <ListItem title={title} Icon={<Icon fontSize="small" color={title === 'EURO' ? 'success' : title === 'GBP' ? 'warning' : 'primary'} />} />

                <div>
                  <Paragraph fontWeight={500}>{value1}%</Paragraph>
                  <Paragraph textAlign="end" color={value2 > 0 ? 'success.500' : 'error.main'}>
                    {value2 > 0 && '+'}
                    {value2}%
                  </Paragraph>
                </div>
              </FlexBetween>)}
          </Stack>
        </Grid>

        <Grid size={{
        sm: 6,
        xs: 12
      }}>
          <Chart type="bar" series={chartSeries} options={chartOptions} height={180} />
        </Grid>
      </Grid>
    </Card>;
}