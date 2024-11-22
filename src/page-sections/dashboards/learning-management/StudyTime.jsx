import Card from '@mui/material/Card';
import styled from '@mui/material/styles/styled';
import useTheme from '@mui/material/styles/useTheme';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next'; // CUSTOM COMPONENT

import { H6 } from '@/components/typography'; // STYLED COMPONENT

export const StyledRoot = styled(Card)(() => ({
  height: '100%',
  padding: '1.5rem 1.5rem 0 1.5rem'
}));
const StyledChart = styled(Chart)(({
  theme
}) => ({
  '& .apexcharts-active': {
    paddingBottom: '0 !important'
  },
  '& .apexcharts-tooltip': {
    border: `1px solid ${theme.palette.divider} !important`
  }
}));
export default function StudyTime() {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  const chartSeries = [{
    name: 'React',
    data: [22, 30, 46, 50, 46, 30, 22]
  }, {
    name: 'Angular',
    data: [36, 40, 56, 75, 56, 40, 36]
  }, {
    name: 'Javascript',
    data: [50, 60, 70, 90, 70, 60, 50]
  }];
  const chartCategories = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const chartOptions = {
    chart: {
      stacked: true,
      background: 'none',
      toolbar: {
        show: false
      },
      fontFamily: theme.typography.fontFamily
    },
    colors: [theme.palette.primary.main, theme.palette.primary[300], theme.palette.primary[100]],
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    states: {
      active: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      }
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      categories: chartCategories,
      labels: {
        style: {
          fontWeight: 500,
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      show: false
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '30%',
        rangeBarOverlap: false
      }
    },
    tooltip: {
      x: {
        show: false
      }
    },
    legend: {
      show: true,
      position: 'bottom',
      fontSize: '13px',
      fontWeight: 500,
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: false
      },
      itemMargin: {
        horizontal: 10
      },
      markers: {
        size: 6,
        shape: 'circle'
      }
    }
  };
  return <StyledRoot>
      <H6 fontSize={14} lineHeight={1}>
        {t('Study Time Last Week')}
      </H6>

      <StyledChart type="bar" options={chartOptions} series={chartSeries} height={275} />
    </StyledRoot>;
}