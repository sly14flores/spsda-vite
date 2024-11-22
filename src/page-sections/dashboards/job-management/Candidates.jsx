import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import { H6 } from '@/components/typography';
export default function Candidates() {
  const theme = useTheme();
  const chartOptions = {
    colors: [theme.palette.primary.main, theme.palette.primary[100]],
    chart: {
      stacked: true,
      background: 'none',
      sparkline: {
        enabled: true
      },
      fontFamily: theme.typography.fontFamily
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%'
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: 8,
            fontSize: '28px',
            fontWeight: 600,
            formatter: value => `+${value}%`,
            color: theme.palette.primary.main
          }
        },
        track: {
          margin: 0,
          strokeWidth: '100%',
          background: theme.palette.primary[100]
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
    labels: ['Male', 'Female'],
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      curve: 'smooth',
      lineCap: 'round'
    },
    legend: {
      show: true,
      position: 'bottom',
      fontSize: '14px',
      fontWeight: 500,
      itemMargin: {
        horizontal: 10
      },
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: false
      },
      markers: {
        size: 6,
        offsetX: -2
      }
    }
  };
  return <Card className="p-3 h-full">
      <H6 fontSize={14} mb={2} textAlign="center">
        Candidates by Gender
      </H6>

      <Chart type="radialBar" height={230} options={chartOptions} series={[70]} />
    </Card>;
}