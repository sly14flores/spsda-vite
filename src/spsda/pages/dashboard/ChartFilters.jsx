import { useState } from 'react'; // MUI

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import styled from '@mui/material/styles/styled';
import useTheme from '@mui/material/styles/useTheme'; // APEX CHART

import Chart from 'react-apexcharts';
import merge from 'lodash.merge';
import { useTranslation } from 'react-i18next'; // CUSTOM COMPONENTS

import MoreButton from '@/components/more-button';
import { Paragraph } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween'; // CUSTOM UTILS METHODS

import { format, formatK } from '@/utils/currency';
import { baseChartOptions } from '@/utils/baseChartOptions'; // STYLED COMPONENTS

const ChartWrapper = styled('div')({
  paddingInline: '.5rem',
  '& .apexcharts-tooltip-text-y-value': {
    marginLeft: 0
  },
  '& .apexcharts-xaxistooltip': {
    display: 'none !important'
  }
});
const TopContentWrapper = styled(FlexBetween)(({
  theme
}) => ({
  [theme.breakpoints.down(730)]: {
    flexDirection: 'column',
    '& .list-item': {
      flex: 1
    },
    '& .list': {
      width: '100%'
    },
    '& > button': {
      display: 'none'
    }
  }
}));
const BoxWrapper = styled('div', {
  shouldForwardProp: prop => prop !== 'active'
})(({
  theme,
  active
}) => ({
  padding: '1.5rem',
  cursor: 'pointer',
  borderRadius: '0 0 12px 12px',
  ...(active && {
    backgroundColor: theme.palette.action.selected
  })
})); // CUSTOM DUMMY DATA

const LIST = [{
  id: 1,
  title: 'Users',
  value: format(12060),
  percentage: 12.5
}, {
  id: 2,
  title: 'Sessions',
  value: format(30000),
  percentage: 5.56
}, {
  id: 3,
  title: 'Bounce Rate',
  value: '53%',
  percentage: -1.5
}, {
  id: 4,
  title: 'Session Duration',
  value: '3m 10s',
  percentage: -10.5
}]; // ==============================================================

// ==============================================================
export default function ChartFilters({
  type = 'area'
}) {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(LIST[1].id);

  const handleChange = id => () => setSelectedItem(id); // REACT CHART DATA SERIES


  const chartSeries = [{
    name: 'Sales',
    data: [8000, 4000, 4500, 17000, 18000, 40000, 18000, 10000, 6000, 20000]
  }]; // REACT CHART CATEGORIES LABEL

  const chartCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: theme.palette.divider
    },
    colors: [theme.palette.primary.main, theme.palette.primary[300], theme.palette.primary[100]],
    xaxis: {
      categories: chartCategories,
      crosshairs: {
        show: true
      },
      labels: {
        show: true,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      min: 0,
      show: true,
      max: Math.max(...chartSeries[0].data) * 1.2,
      tickAmount: 5,
      labels: {
        formatter: value => formatK(value),
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  });
  return <Card>
      <TopContentWrapper gap={4}>
        <Stack className="list" gap={1} direction={{
        sm: 'row',
        xs: 'column'
      }}>
          {LIST.map(item => <BoxWrapper key={item.id} className="list-item" onClick={handleChange(item.id)} active={selectedItem === item.id ? 1 : 0}>
              <Paragraph ellipsis lineHeight={1} fontWeight={500} color="text.secondary">
                {t(item.title)}
              </Paragraph>

              <Paragraph fontSize={22} fontWeight={600}>
                {item.value}
              </Paragraph>

              <Paragraph fontWeight={500} color={item.percentage > 0 ? 'success.main' : 'error.main'}>
                {item.percentage > 0 && '+'}
                {item.percentage}%
              </Paragraph>
            </BoxWrapper>)}
        </Stack>

        <MoreButton sx={{
        mr: 3
      }} />
      </TopContentWrapper>

      <ChartWrapper>
        <Chart type={type} height={335} series={chartSeries} options={chartOptions} />
      </ChartWrapper>
    </Card>;
}