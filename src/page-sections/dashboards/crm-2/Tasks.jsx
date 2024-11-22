import Card from '@mui/material/Card';
import styled from '@mui/material/styles/styled';
import useTheme from '@mui/material/styles/useTheme'; // REACT APEX CHART

import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import { H1, H6, Paragraph } from '@/components/typography'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENT

const StyledRoot = styled(Card)(({
  theme
}) => ({
  height: '100%',
  display: 'flex',
  backgroundColor: isDark(theme) ? theme.palette.background.paper : theme.palette.primary[50],
  '& .left-content': {
    padding: theme.spacing(3),
    backgroundColor: isDark(theme) ? theme.palette.background.default : 'white',
    [theme.breakpoints.down('md')]: {
      minWidth: '30%'
    }
  },
  '& .content-wrapper': {
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: theme.palette.primary.main
  },
  '& .right-content': {
    flex: 1,
    paddingBlock: theme.spacing(3)
  }
}));
export default function Tasks() {
  const theme = useTheme(); // CHART DATA SERIES

  const chartSeries = [{
    name: 'Tasks',
    data: [22, 30, 45, 45, 30, 22]
  }]; // CHART CATEGORIES LABEL

  const chartCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']; // CHART OPTIONS

  const chartOptions = {
    chart: {
      stacked: true,
      background: 'none',
      toolbar: {
        show: false
      },
      fontFamily: theme.typography.fontFamily
    },
    grid: {
      show: false
    },
    yaxis: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    colors: [theme.palette.primary.main],
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
    xaxis: {
      labels: {
        show: false
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      categories: chartCategories
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '30%',
        rangeBarOverlap: false,
        borderRadiusApplication: 'around'
      }
    },
    tooltip: {
      x: {
        show: false
      },
      marker: {
        show: false
      },
      y: {
        formatter: val => `$${val}`
      }
    }
  };
  return <StyledRoot>
      <div className="left-content">
        <H6 fontSize={14} mb={6}>
          Tasks
        </H6>

        <div className="content-wrapper">
          <Paragraph fontSize={18} fontWeight={600}>
            All
          </Paragraph>

          <H1 fontSize={32}>64</H1>

          <Paragraph fontSize={18} fontWeight={600}>
            Tasks
          </Paragraph>
        </div>
      </div>

      <div className="right-content">
        <Chart type="bar" width="100%" height={220} series={chartSeries} options={chartOptions} />
        <Paragraph fontWeight={600} textAlign="center" color="text.secondary">
          Last 6 months
        </Paragraph>
      </div>
    </StyledRoot>;
}