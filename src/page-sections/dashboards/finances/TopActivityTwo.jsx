import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme';
import merge from 'lodash.merge';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import MoreButton from '@/components/more-button';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { Paragraph } from '@/components/typography'; // CUSTOM UTILS METHOD

import { baseChartOptions } from '@/utils/baseChartOptions';
export default function TopActivityTwo() {
  const theme = useTheme(); // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    labels: ['Asia', 'Europe', 'Africa'],
    colors: [theme.palette.primary.main, theme.palette.grey[400], theme.palette.grey[300]],
    stroke: {
      width: 0
    },
    legend: {
      show: true,
      fontSize: '14px',
      position: 'bottom',
      itemMargin: {
        horizontal: 12
      },
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: false
      },
      markers: {
        strokeWidth: 0,
        size: 6,
        offsetX: -2
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
    }
  });
  return <Card className="p-3 h-full">
      <FlexBetween mb={4}>
        <Paragraph fontSize={18} fontWeight={500}>
          Top Activity
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <div>
        <Chart type="pie" height={265} series={[55, 45, 33]} options={chartOptions} />
      </div>
    </Card>;
}