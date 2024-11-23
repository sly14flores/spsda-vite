import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme';
import merge from 'lodash.merge';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import Title from '@/components/title';
import MoreButton from '@/components/more-button';
import FlexBetween from '@/components/flexbox/FlexBetween'; // CUSTOM UTILS METHOD

import { baseChartOptions } from '@/utils/baseChartOptions';
export default function AveragePosition() {
  const theme = useTheme(); // REACT CHART DATA SERIES

  const chartSeries = [{
    name: 'Sales',
    data: [6, 15, 10, 17]
  }]; // REACT CHART CATEGORIES LABEL

  const chartCategories = ['Jan', 'Feb', 'Mar', 'Apr']; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    colors: [theme.palette.success.main],
    markers: {
      strokeColors: theme.palette.success.main
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: theme.palette.divider
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: chartCategories,
      labels: {
        show: true,
        style: {
          colors: theme.palette.text.secondary
        }
      },
      crosshairs: {
        show: true,
        fill: {
          color: theme.palette.success.main
        },
        stroke: {
          color: theme.palette.success.main
        }
      }
    },
    yaxis: {
      min: 0,
      max: Math.max(...chartSeries[0].data) * 1.2,
      show: true,
      tickAmount: 6,
      labels: {
        style: {
          colors: theme.palette.text.secondary,
          fontWeight: 500
        },
        formatter: value => `${Math.floor(value)}`
      }
    }
  });
  return <Card className="h-full">
      <FlexBetween mb={4} px={3} pt={3}>
        <div>
          <Title title="5.8" subtitle="Average Positions" percentage="+12.5%" />
        </div>

        <MoreButton size="small" />
      </FlexBetween>

      <Box px={1}>
        <Chart type="line" height={332} options={chartOptions} series={chartSeries} width="100%" />
      </Box>
    </Card>;
}