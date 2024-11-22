import Card from '@mui/material/Card';
import styled from '@mui/material/styles/styled';
import useTheme from '@mui/material/styles/useTheme';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import { H6 } from '@/components/typography';
export const StyledChart = styled(Chart)(({
  theme
}) => ({
  '& .apexcharts-active': {
    paddingBottom: '0 !important'
  },
  '& .apexcharts-tooltip': {
    border: `1px solid ${theme.palette.divider} !important`
  }
}));
export default function RecentJob() {
  const theme = useTheme(); //   CHART DATA SERIES

  const chartSeries = [{
    name: 'Manager',
    data: [22, 30, 46, 50, 46, 30, 22]
  }, {
    name: 'Marketer',
    data: [36, 40, 56, 75, 56, 40, 36]
  }, {
    name: 'Developer',
    data: [50, 60, 70, 90, 70, 60, 50]
  }]; //   CHART CATEGORIES

  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']; // CHART OPTIONS

  const options = {
    chart: {
      stacked: true,
      background: 'none',
      toolbar: {
        show: false
      },
      fontFamily: theme.typography.fontFamily
    },
    colors: [theme.palette.primary.main, theme.palette.primary[300], theme.palette.primary[100]],
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
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
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
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
      show: false
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '30%',
        rangeBarOverlap: false
      }
    },
    tooltip: {
      x: {
        show: false
      }
    },
    legend: {
      show: true,
      position: 'bottom',
      fontSize: '13px',
      fontWeight: 500,
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: false
      },
      itemMargin: {
        horizontal: 10
      },
      markers: {
        size: 6,
        offsetX: -2,
        shape: 'circle'
      }
    }
  };
  return <Card className="p-3 h-full pb-0">
      <H6 fontSize={14}>Recent Job Applications</H6>
      <StyledChart type="bar" options={options} series={chartSeries} height={275} />
    </Card>;
}