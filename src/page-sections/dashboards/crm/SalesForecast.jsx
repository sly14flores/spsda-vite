import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme';
import merge from 'lodash.merge';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import MoreButton from '@/components/more-button';
import { Paragraph } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween'; // CUSTOM UTILS METHODS

import { currency, formatK } from '@/utils/currency';
import { baseChartOptions } from '@/utils/baseChartOptions';
export default function SalesForecast() {
  const theme = useTheme(); // REACT CHART CATEGORIES LABEL

  const chartCategories = ['Goal', 'Pending', 'Profit']; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: 'Sales',
    data: [50000, 28000, 40000]
  }]; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    stroke: {
      width: 0
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: theme.palette.divider
    },
    colors: [theme.palette.primary.main, theme.palette.grey[700], theme.palette.grey[400]],
    xaxis: {
      categories: chartCategories,
      labels: {
        show: true,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      min: 0,
      show: true,
      max: 50000,
      tickAmount: 3,
      labels: {
        formatter: value => formatK(value),
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 7,
        distributed: true,
        columnWidth: '17%',
        borderRadiusApplication: 'end'
      }
    },
    tooltip: {
      y: {
        formatter: function (val, {
          dataPointIndex,
          w
        }) {
          return `${w.globals.labels[dataPointIndex]} : ${currency(val)}`;
        }
      }
    }
  });
  return <Card sx={{
    pt: 3,
    px: 2,
    pb: 1
  }}>
      <FlexBetween px={2}>
        <Paragraph fontSize={18} fontWeight={500}>
          Sales Forecast
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Chart type="bar" height={220} series={chartSeries} options={chartOptions} />
    </Card>;
}