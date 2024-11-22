import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme';
import merge from 'lodash.merge';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import MoreButton from '@/components/more-button';
import { Paragraph } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween'; // CUSTOM UTILS METHODS

import { isDark } from '@/utils/constants';
import { baseChartOptions } from '@/utils/baseChartOptions';
export default function DealType() {
  const theme = useTheme(); // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    labels: ['Pending', 'Won', 'Loss'],
    stroke: {
      colors: [isDark(theme) ? theme.palette.grey[800] : '#fff']
    },
    colors: [theme.palette.primary.main, theme.palette.success[500], theme.palette.grey[500]],
    legend: {
      show: true,
      fontSize: '14px',
      position: 'bottom',
      itemMargin: {
        horizontal: 7
      },
      markers: {
        size: 6,
        offsetX: -2
      }
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              offsetY: 0
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              fontSize: '12px',
              fontWeight: 500,
              color: theme.palette.text.secondary,
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b) + '%';
              }
            },
            value: {
              show: true,
              offsetY: 4,
              fontSize: '18px',
              fontWeight: 500,
              formatter: val => val
            }
          }
        }
      }
    },
    tooltip: {
      y: {
        formatter: val => String(val),
        title: {
          formatter: series => series
        }
      }
    }
  });
  return <Card className="p-3">
      <FlexBetween pb={3}>
        <Paragraph fontSize={18} fontWeight={500}>
          Deal Type
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Chart height={220} type="donut" options={chartOptions} series={[40, 20, 20]} />
    </Card>;
}