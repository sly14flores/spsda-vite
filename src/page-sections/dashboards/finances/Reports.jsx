import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme';
import merge from 'lodash.merge';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import MoreButton from '@/components/more-button';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { Paragraph } from '@/components/typography'; // CUSTOM UTILS METHODS

import { baseChartOptions } from '@/utils/baseChartOptions';
import { currency } from '@/utils/currency';
import { isDark } from '@/utils/constants';
export default function Reports() {
  const theme = useTheme(); // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    stroke: {
      width: 2,
      colors: [isDark(theme) ? theme.palette.grey[800] : '#fff']
    },
    labels: ['Expense', 'Revenue'],
    colors: [theme.palette.grey[300], theme.palette.primary.main],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '80%',
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: '+20%',
              fontSize: '14px',
              fontWeight: 500,
              color: theme.palette.text.secondary,
              formatter: function (w) {
                return currency(w.globals.seriesTotals.reduce((a, b) => a + b));
              }
            },
            name: {
              offsetY: 23
            },
            value: {
              show: true,
              offsetY: -15,
              fontSize: '20px',
              fontWeight: 600
            }
          }
        }
      }
    },
    tooltip: {
      style: {
        fontSize: '14px'
      },
      y: {
        title: name => name,
        formatter: val => `${val}`
      }
    },
    legend: {
      show: true,
      fontSize: '14px',
      position: 'bottom',
      itemMargin: {
        horizontal: 12
      },
      markers: {
        strokeWidth: 0,
        shape: 'circle',
        offsetX: -2
      }
    }
  });
  return <Card className="p-3">
      <FlexBetween mb={3}>
        <Paragraph fontSize={18} fontWeight={500}>
          Reports
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Chart height={235} type="donut" series={[10000, 15000]} options={chartOptions} />
    </Card>;
}