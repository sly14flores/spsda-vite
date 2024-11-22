import { Card, useTheme } from '@mui/material';
import Chart from 'react-apexcharts';
import { H6 } from '@/components/typography';
export default function ProjectStatus() {
  const theme = useTheme();
  const chartOptions = {
    colors: [theme.palette.primary.main, theme.palette.warning.main, theme.palette.info.main, theme.palette.success.main],
    chart: {
      stacked: false,
      background: 'none',
      sparkline: {
        enabled: true
      },
      fontFamily: theme.typography.fontFamily
    },
    plotOptions: {
      pie: {
        donut: {
          size: '72%'
        }
      }
    },
    states: {
      normal: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      },
      active: {
        filter: {
          type: 'none'
        }
      }
    },
    legend: {
      show: true,
      offsetY: 6,
      fontWeight: 500,
      position: 'bottom',
      itemMargin: {
        horizontal: 10
      },
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: false
      }
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    },
    labels: ['In Progress', 'On Hold', 'Upcoming', 'Completed']
  };
  return <Card className="p-3 h-full">
      <H6 fontSize={14} mb={4} textAlign="center">
        Project Status
      </H6>

      <Chart height={350} type="donut" options={chartOptions} series={[50, 30, 20, 40]} />
    </Card>;
}