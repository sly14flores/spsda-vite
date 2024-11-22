import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import styled from '@mui/material/styles/styled';
import useTheme from '@mui/material/styles/useTheme';
import merge from 'lodash.merge';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next'; // CUSTOM COMPONENTS

import MoreButton from '@/components/more-button';
import { Paragraph } from '@/components/typography';
import { FlexBetween, FlexBox, FlexRowAlign } from '@/components/flexbox'; // CUSTOM UTILS METHOD

import { baseChartOptions } from '@/utils/baseChartOptions'; // STYLED COMPONENT

const StyledChart = styled(Chart)({
  marginBottom: 24
}); // CUSTOM DUMMY DATA

const DATA = [{
  id: 1,
  value: 3.19,
  percentage: 60,
  title: 'Chrome',
  color: 'primary.main',
  image: '/static/browser/chrome.svg'
}, {
  id: 2,
  value: -1.98,
  percentage: 10,
  title: 'Opera Mini',
  color: 'success.500',
  image: '/static/browser/opera.svg'
}, {
  id: 3,
  value: 2.23,
  percentage: 30,
  title: 'Mozilla',
  color: 'grey.400',
  image: '/static/browser/mozilla.svg'
}];
export default function SessionBrowser() {
  const theme = useTheme();
  const {
    t
  } = useTranslation(); // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    stroke: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    labels: ['Chrome', 'Opera Mini', 'Firefox', 'Yahoo!'],
    plotOptions: {
      pie: {
        donut: {
          size: '75%'
        },
        expandOnClick: false
      }
    },
    tooltip: {
      y: {
        formatter: val => String(val),
        title: {
          formatter: series => series
        }
      }
    },
    colors: [theme.palette.grey[500], theme.palette.primary.main, theme.palette.warning.main, theme.palette.success.main]
  });
  return <Card className="h-full">
      <FlexBetween p={3}>
        <Paragraph fontSize={18} fontWeight={500}>
          {t('Session by browser')}
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <StyledChart height={160} type="donut" options={chartOptions} series={[50, 30, 20, 40]} />

      {DATA.map(item => <FlexBox px={3} py={2} key={item.id} alignItems="center" borderTop="1px dashed" borderColor="divider">
          <FlexBox alignItems="center" gap={1} minWidth={120}>
            <Avatar variant="square" src={item.image} sx={{
          width: 30,
          height: 30
        }} />
            <Paragraph fontWeight={500}>{item.title}</Paragraph>
          </FlexBox>

          <FlexRowAlign gap={1} flexGrow={1}>
            <Box width={8} height={8} borderRadius="50%" bgcolor={item.color} />
            <Paragraph color="text.secondary" fontWeight={500}>
              {item.percentage}%
            </Paragraph>
          </FlexRowAlign>

          <Paragraph color={item.value > 0 ? 'success.main' : 'error.main'}>
            {item.value}%
          </Paragraph>
        </FlexBox>)}
    </Card>;
}