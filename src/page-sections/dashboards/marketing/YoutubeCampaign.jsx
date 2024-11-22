import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme';
import merge from 'lodash.merge';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import Percentage from '@/components/percentage';
import MoreButton from '@/components/more-button';
import { H6, Paragraph } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM UTILS METHODS

import { formatK } from '@/utils/currency';
import { baseChartOptions } from '@/utils/baseChartOptions';
export default function YoutubeCampaign() {
  const theme = useTheme(); // REACT CHART CATEGORIES LABEL

  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: 'Tasks',
    data: [22, 30, 46, 50, 46, 30, 22]
  }]; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    stroke: {
      show: false
    },
    xaxis: {
      categories: chartCategories
    },
    colors: [theme.palette.divider, theme.palette.primary.main],
    plotOptions: {
      bar: {
        borderRadius: 10,
        distributed: true,
        columnWidth: '50%',
        borderRadiusApplication: 'end'
      }
    },
    tooltip: {
      y: {
        formatter: (val, {
          dataPointIndex,
          w
        }) => {
          return `${w.globals.labels[dataPointIndex]} : ${val}`;
        }
      }
    }
  });
  return <Card>
      <FlexBetween p={3}>
        <div>
          <Paragraph ellipsis lineHeight={1.3} fontSize={18} fontWeight={500}>
            YouTube Campaign
          </Paragraph>

          <Paragraph color="text.secondary">Active Campaign</Paragraph>
        </div>

        <MoreButton size="small" />
      </FlexBetween>

      <FlexBetween flexWrap="wrap" px={3} pt={2} pb={1}>
        <div>
          <FlexBox alignItems="center" gap={1}>
            <H6 fontSize={22} lineHeight={1}>
              {formatK(500000)}
            </H6>

            <Percentage type="error">-10.25%</Percentage>
          </FlexBox>

          <Paragraph color="text.secondary">Subscribers</Paragraph>
        </div>

        <div>
          <FlexBox alignItems="center" gap={1}>
            <H6 fontSize={22} lineHeight={1}>
              {formatK(1000000)}
            </H6>

            <Percentage type="success">+4.67%</Percentage>
          </FlexBox>

          <Paragraph color="text.secondary">Subscribers Goal</Paragraph>
        </div>
      </FlexBetween>

      <Chart type="bar" series={chartSeries} options={chartOptions} height={230} />
    </Card>;
}