import { NavLink } from 'react-router-dom'; // MUI

import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme';
import ShowChart from '@mui/icons-material/ShowChart'; // APEX CHART

import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import { H6, Paragraph } from '@/components/typography';
import { FlexBox, FlexBetween } from '@/components/flexbox';
export default function OrderStats() {
  const theme = useTheme(); // CHART DATA SERIES

  const chartSeries = [{
    name: 'Orders',
    data: [10, 30, 49, 55, 30, 70, 100]
  }]; // CHART CATEGORIES

  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']; // REACT CHART OPTIONS

  const chartOptions = {
    chart: {
      stacked: true,
      background: 'none',
      toolbar: {
        show: false
      },
      fontFamily: theme.typography.fontFamily
    },
    grid: {
      show: false
    },
    yaxis: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    colors: [theme.palette.primary.main, theme.palette.primary[300], theme.palette.primary[100]],
    states: {
      active: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      }
    },
    xaxis: {
      categories: chartCategories,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
          fontWeight: 500
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
  return <Card className="p-3 pb-0">
      <FlexBetween>
        <H6 fontSize={14}>Order Stats</H6>
        <NavLink to="#" style={{
        fontSize: 13,
        fontWeight: 500
      }}>
          View all
        </NavLink>
      </FlexBetween>

      <FlexBetween mt={2}>
        <div>
          <H6 fontSize={18}>125</H6>
          <Paragraph fontSize={12} fontWeight={500} color="text.secondary">
            Total Orders
          </Paragraph>
        </div>

        <FlexBox alignItems="center" gap={0.5}>
          <ShowChart fontSize="small" color="primary" />
          <Paragraph lineHeight={1} fontWeight={500} color="text.secondary">
            15% increased
          </Paragraph>
        </FlexBox>
      </FlexBetween>

      <Chart options={chartOptions} series={chartSeries} type="area" height={230} />
    </Card>;
}