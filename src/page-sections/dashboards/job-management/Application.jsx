import Card from '@mui/material/Card';
import Select from '@mui/material/Select';
import useTheme from '@mui/material/styles/useTheme';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import { H6 } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween';
export default function Application() {
  const theme = useTheme(); // CHART SERIES

  const chartSeries = [{
    name: 'Application',
    data: [10, 30, 5, 49, 55, 30, 70, 80, 100]
  }]; // CHART CATEGORIES

  const chartCategories = ['12 Am', '1 Am', '2 Am', '3 Am', '4 Am', '5 Am', '6 Am', '7 Am', '8 Am']; // CHART OPTIONS

  const chartOptions = {
    chart: {
      background: 'none',
      toolbar: {
        show: false
      },
      fontFamily: theme.typography.fontFamily
    },
    grid: {
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
      tickAmount: 4,
      max: 100,
      min: 0,
      labels: {
        formatter: value => `${value}%`,
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
      y: {
        formatter: val => `${val}`
      },
      style: {
        fontSize: '13px',
        fontFamily: theme.typography.fontFamily
      }
    }
  };
  return <Card className="p-3 pb-0 h-full">
      <FlexBetween>
        <H6 fontSize={14}>Application Received Time</H6>

        <Select native size="small">
          <option value="sat">Sat</option>
          <option value="sun">Sun</option>
          <option value="mon">Mon</option>
          <option value="tue">Tue</option>
        </Select>
      </FlexBetween>

      <Chart options={chartOptions} series={chartSeries} type="area" height={250} />
    </Card>;
}