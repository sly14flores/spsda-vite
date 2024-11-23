import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import styled from '@mui/material/styles/styled';
import useTheme from '@mui/material/styles/useTheme';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';
import merge from 'lodash.merge'; // CUSTOM COMPONENTS

import Title from '@/components/title';
import Scrollbar from '@/components/scrollbar';
import MoreButton from '@/components/more-button';
import { FlexBetween, FlexBox } from '@/components/flexbox';
import { Paragraph, Small } from '@/components/typography'; // CUSTOM UTILS METHODS

import { format } from '@/utils/currency';
import { baseChartOptions } from '@/utils/baseChartOptions'; // COMMON STYLED COMPONENTS

import { HeadTableCell } from './styles'; // STYLED COMPONENTS

const StyledChart = styled(Chart)({
  '& .apexcharts-canvas': {
    marginLeft: 'auto'
  },
  '& .apexcharts-tooltip-text-y-value': {
    marginLeft: 0
  },
  '& .apexcharts-xaxistooltip': {
    display: 'none !important'
  }
});
const BodyTableCell = styled(TableCell)(({
  theme
}) => ({
  fontWeight: 600,
  color: theme.palette.grey[500],
  borderTop: `1px dashed ${theme.palette.divider}`
}));
export default function TopReferral() {
  const theme = useTheme();
  const {
    t
  } = useTranslation(); // REACT CHART CATEGORIES LABEL

  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: 'Tasks',
    data: [0, 30, 16, 70, 26, 30, 12]
  }]; // REACT CHART OPTIONS

  const chartOptions = color => {
    return merge(baseChartOptions(theme), {
      colors: [color],
      stroke: {
        width: 2
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        categories: chartCategories
      },
      dataLabels: {
        enabled: false
      },
      chart: {
        zoom: {
          enabled: false
        }
      }
    });
  }; // CUSTOM DUMMY DATA


  const DATA = [{
    id: 1,
    image: '/static/social-media/dribble.svg',
    title: 'Dribbble',
    category: 'Community',
    rate: 70,
    visit: 12350,
    chart: {
      series: chartSeries,
      option: chartOptions(theme.palette.success.main)
    }
  }, {
    id: 2,
    image: '/static/social-media/linkedin.svg',
    title: 'Linked In',
    category: 'Social Media',
    rate: 60,
    visit: 10275,
    chart: {
      series: chartSeries,
      option: chartOptions(theme.palette.error.main)
    }
  }, {
    id: 3,
    image: '/static/social-media/twitter.svg',
    title: 'Twitter',
    category: 'Social Media',
    rate: 50,
    visit: 20348,
    chart: {
      series: chartSeries,
      option: chartOptions(theme.palette.success.main)
    }
  }];
  return <Card sx={{
    padding: 3,
    pb: 0
  }}>
      <FlexBetween mb={4}>
        <div>
          <Title title={1352} subtitle={t('Visits by Top Referral Source')} percentage="+12.5%" />
        </div>

        <MoreButton size="small" />
      </FlexBetween>

      <Scrollbar>
        <Table sx={{
        minWidth: 500
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>REFERRAL SOURCE</HeadTableCell>
              <HeadTableCell align="center">BOUNCE RATE (%)</HeadTableCell>
              <HeadTableCell align="center">VISIT</HeadTableCell>
              <HeadTableCell align="right">CHART</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {DATA.map(item => <TableRow key={item.id}>
                <BodyTableCell>
                  <FlexBox alignItems="center" gap={1.5}>
                    <Avatar variant="square" src={item.image} />
                    <div>
                      <Paragraph color="text.primary" fontWeight={600}>
                        {item.title}
                      </Paragraph>
                      <Small color="text.secondary">{item.category}</Small>
                    </div>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell align="center">{item.rate}%</BodyTableCell>

                <BodyTableCell align="center">{format(item.visit)}</BodyTableCell>

                <BodyTableCell align="right">
                  <StyledChart type="line" width={100} height={80} series={item.chart.series} options={item.chart.option} />
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
}