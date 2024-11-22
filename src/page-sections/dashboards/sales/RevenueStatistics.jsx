import Card from '@mui/material/Card';
import Select from '@mui/material/Select';
import useTheme from '@mui/material/styles/useTheme'; // REACT APEX CHART

import Chart from 'react-apexcharts';
//  CUSTOM COMPONENTS
import { H6, Paragraph } from '@/components/typography';
import { FlexBox, FlexBetween } from '@/components/flexbox'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants';
export default function RevenueStatistics() {
  const theme = useTheme(); // REACT CHART DATA SERIES

  const chartSeries = [{
    name: 'Total',
    data: [10, 30, 85, 49, 55, 35, 60]
  }, {
    name: 'Average',
    data: [50, 34, 45, 79, 35, 70, 120]
  }]; // REACT CHART CATEGORIES LABEL

  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']; // REACT CHART OPTIONS

  const chartOptions = {
    chart: {
      stacked: false,
      background: 'none',
      toolbar: {
        show: false
      },
      fontFamily: theme.typography.fontFamily
    },
    legend: {
      show: false
    },
    stroke: {
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    colors: [theme.palette.primary.main, theme.palette.grey[300]],
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: false
        }
      },
      borderColor: theme.palette.grey[isDark(theme) ? 700 : 100]
    },
    xaxis: {
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      categories: chartCategories,
      labels: {
        style: {
          fontWeight: 500,
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      min: 0,
      max: 150,
      tickAmount: 3,
      labels: {
        style: {
          fontWeight: 500,
          colors: theme.palette.text.secondary
        }
      }
    },
    tooltip: {
      x: {
        show: false
      },
      style: {
        fontSize: '13px'
      },
      y: {
        formatter: val => `${val}`
      }
    }
  };
  return <Card className="p-3 h-full pb-0">
      <FlexBetween mb={2}>
        <H6 fontSize={14}>Revenue Statistics</H6>
        <Select native size="small">
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="day">Day</option>
        </Select>
      </FlexBetween>

      <FlexBox mb={2} gap={4}>
        <div>
          <H6 fontSize={18}>$56,765</H6>
          <Paragraph fontSize={12} fontWeight={500} color="text.secondary">
            Total Sale
          </Paragraph>
        </div>

        <div>
          <H6 fontSize={18}>$350</H6>
          <Paragraph fontSize={12} fontWeight={500} color="text.secondary">
            Average Sale
          </Paragraph>
        </div>
      </FlexBox>

      <Chart options={chartOptions} series={chartSeries} type="line" height={250} />
    </Card>;
}