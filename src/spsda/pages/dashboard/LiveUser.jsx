import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import useTheme from '@mui/material/styles/useTheme';
import merge from 'lodash.merge';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next'; // CUSTOM COMPONENTS

import { FlexBetween } from '@/components/flexbox';
import MoreButton from '@/components/more-button';
import { H6, Paragraph, Span } from '@/components/typography'; // CUSTOM UTILS METHODS

import { baseChartOptions } from '@/utils/baseChartOptions';
export default function LiveUser() {
  const theme = useTheme();
  const {
    t
  } = useTranslation(); // REACT CHART DATA SERIES

  const chartSeries = [{
    name: 'Tasks',
    data: [22, 30, 46, 50, 46, 30, 22]
  }]; // REACT CHART CATEGORIES LABEL

  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: false
    },
    xaxis: {
      categories: chartCategories
    },
    colors: [theme.palette.divider, theme.palette.primary.main],
    plotOptions: {
      bar: {
        borderRadius: 7,
        columnWidth: '40%',
        distributed: true
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
  return <Card className="p-3 h-full">
      <FlexBetween>
        <div>
          <Paragraph color="text.secondary">{t('Live Online User')}</Paragraph>
          <H6>348</H6>
        </div>

        <MoreButton size="small" />
      </FlexBetween>

      <Paragraph mt={4}>
        {t('Page views')} <Span color="text.secondary">/ Second</Span>
      </Paragraph>

      <Chart type="bar" options={chartOptions} series={chartSeries} height={250} />

      <Button color="secondary" sx={{
      width: '100%'
    }}>
        {t('View Details')}
      </Button>
    </Card>;
}