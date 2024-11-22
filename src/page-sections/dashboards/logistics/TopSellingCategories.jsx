import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme';
import merge from 'lodash.merge';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import MoreButton from '@/components/more-button';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { Paragraph } from '@/components/typography'; // CUSTOM UTILS METHOD

import { currency, formatK } from '@/utils/currency';
import { baseChartOptions } from '@/utils/baseChartOptions';
export default function TopSellingCategories() {
  const theme = useTheme(); // REACT CHART DATA SERIES

  const chartSeries = [{
    name: 'Sales',
    data: [30000, 20000, 45000, 40000, 48000, 25000, 40000]
  }]; // REACT CHART CATEGORIES LABEL

  const chartCategories = ['70% ECR', 'FGI 50%', 'EOQ 80%', 'FMG 75%', 'PLG 90%', 'OLX 60%', 'FCR 70%']; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    stroke: {
      width: 0
    },
    colors: [theme.palette.primary.main, theme.palette.divider],
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: theme.palette.divider
    },
    xaxis: {
      crosshairs: {
        show: true
      },
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
      tickAmount: 5,
      labels: {
        formatter: value => formatK(value),
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 15,
        distributed: true,
        columnWidth: '30',
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
    },
    responsive: [{
      breakpoint: theme.breakpoints.values.sm,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 10,
            horizontal: true
          }
        },
        xaxis: {
          labels: {
            formatter: value => value > 0 ? `${Math.round(value / 1000)}K` : value
          }
        },
        yaxis: {
          show: true,
          labels: {
            style: {
              fontWeight: 500,
              colors: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily
            }
          }
        }
      }
    }]
  });
  return <Card sx={{
    pt: 3,
    px: 2
  }}>
      <FlexBetween px={2}>
        <Paragraph fontSize={18} fontWeight={500}>
          Top Selling Categories
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Chart type="bar" height={310} series={chartSeries} options={chartOptions} />
    </Card>;
}