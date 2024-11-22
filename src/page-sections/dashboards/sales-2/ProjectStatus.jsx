import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme'; // REACT APEX CHART

import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import { H6 } from '@/components/typography';
export default function ProjectStatus() {
  const theme = useTheme(); // REACT CHART OPTIONS

  const chartOptions = {
    colors: [theme.palette.primary.main, theme.palette.info.main, theme.palette.warning.main, theme.palette.grey[200]],
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
          size: '75%',
          labels: {
            show: true,
            total: {
              show: true,
              fontWeight: 600,
              showAlways: true,
              fontSize: '14px',
              label: 'Avg Range',
              color: theme.palette.text.secondary,
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
              }
            },
            value: {
              show: true,
              fontWeight: 600,
              fontSize: '24px',
              formatter: val => val
            }
          }
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
    labels: ['Transactions', 'Payouts', 'Sales', 'Reports'],
    theme: {
      mode: theme.palette.mode
    },
    legend: {
      show: true,
      position: 'bottom',
      fontSize: '13px',
      fontWeight: 500,
      itemMargin: {
        horizontal: 10,
        vertical: 5
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
    },
    tooltip: {
      style: {
        fontSize: '13px'
      }
    },
    stroke: {
      width: 0
    }
  };
  return <Card className="p-3 h-full">
      <H6 textAlign="center" fontSize={14} mb={3}>
        Project Status
      </H6>

      <Chart height={280} type="donut" options={chartOptions} series={[50, 30, 20, 40]} />
    </Card>;
}