import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme'; // REACT APEX CHART

import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next'; // CUSTOM COMPONENTS

import { H6 } from '@/components/typography';
export default function SalesProductDetails() {
  const theme = useTheme();
  const {
    t
  } = useTranslation(); // REACT CHART OPTIONS

  const chartOptions = {
    labels: ['Electronics', 'Furniture', 'Accessories'],
    colors: [theme.palette.primary.main, '#FF9777', '#FF6B93'],
    chart: {
      background: 'none',
      fontFamily: theme.typography.fontFamily
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '30%'
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            show: false
          }
        },
        track: {
          margin: 15,
          background: theme.palette.divider
        }
      }
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      lineCap: 'round',
      curve: 'smooth'
    },
    legend: {
      show: true,
      position: 'bottom',
      fontFamily: 'inherit',
      fontSize: '13px',
      fontWeight: 500,
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: true
      },
      markers: {
        strokeWidth: 0,
        size: 6,
        offsetX: -3
      }
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: value => `$${value}`
      }
    },
    states: {
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
    }
  };
  return <Card className="p-3">
      <H6 fontSize={14} mb={2}>
        {t('Sales Product Details')}
      </H6>

      <Chart options={chartOptions} series={[75, 50, 25]} type="radialBar" height={325} />
    </Card>;
}