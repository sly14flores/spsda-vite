import { useState } from 'react'; // MUI

import Card from '@mui/material/Card';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styled from '@mui/material/styles/styled';
import useTheme from '@mui/material/styles/useTheme';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import merge from 'lodash.merge'; // CUSTOM COMPONENT

import { H6 } from '@/components/typography'; // CUSTOM UTILS METHODS

import { currency, formatK } from '@/utils/currency';
import { baseChartOptions } from '@/utils/baseChartOptions'; // STYLED COMPONENTS

const StyledRoot = styled(Card)(({
  theme
}) => ({
  height: '100%',
  '& .title': {
    gap: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1.5rem 0 1.5rem'
  },
  '& .chart': {
    paddingLeft: '.5rem'
  },
  '& .MuiOutlinedInput-input.MuiInputBase-input': {
    padding: '7px 14px'
  }
})); // REACT CHART DATA

const chartData = [{
  title: 'Month',
  data: [{
    name: 'Earning',
    data: [15000, 4500, 12000, 5000, 7500, 13000, 3000, 12000, 7500, 10000, 5500, 15000]
  }]
}, {
  title: 'Week',
  data: [{
    name: 'Earning',
    data: [10000, 4500, 14000, 6000, 7500, 13000, 7000, 12000, 11500, 10000, 5500, 11000]
  }]
}, {
  title: 'Day',
  data: [{
    name: 'Earning',
    data: [15000, 4500, 15000, 5000, 9500, 13000, 3000, 12000, 10500, 10000, 5500, 11000]
  }]
}]; // REACT CHART CATEGORIES

const chartCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export default function EarningReport() {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  const [seriesData, setSeriesData] = useState('Month');

  const handleChangeSeriesData = event => {
    setSeriesData(event.target.value);
  }; // REACT CHART DATA SERIES


  const chartSeries = chartData.find(item => item.title === seriesData)?.data; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    stroke: {
      show: false
    },
    colors: [theme.palette.primary.main],
    xaxis: {
      categories: chartCategories,
      labels: {
        show: true,
        style: {
          fontWeight: 500,
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      min: 0,
      max: 15000,
      show: true,
      tickAmount: 4,
      labels: {
        formatter: value => formatK(value),
        style: {
          colors: theme.palette.text.secondary,
          fontWeight: 500
        }
      }
    },
    tooltip: {
      y: {
        formatter: function (val, {
          dataPointIndex,
          w
        }) {
          return `${w.globals.labels[dataPointIndex]} : ${currency(val)}`;
        }
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '40%',
        borderRadiusApplication: 'around'
      }
    },
    responsive: [{
      breakpoint: 550,
      options: {
        chart: {
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          min: 0,
          max: 15000,
          tickAmount: 4,
          labels: {
            show: true,
            formatter: value => formatK(Math.floor(value)),
            style: {
              colors: theme.palette.text.secondary,
              fontWeight: 500
            }
          }
        },
        yaxis: {
          show: true,
          labels: {
            style: {
              colors: theme.palette.text.secondary,
              fontWeight: 500
            }
          }
        }
      }
    }]
  });
  return <StyledRoot>
      <div className="title">
        <H6 fontSize={14}>{t('Earnings Report')}</H6>

        <Select size="small" value={seriesData} onChange={handleChangeSeriesData}>
          <MenuItem value="Month">Month</MenuItem>
          <MenuItem value="Week">Week</MenuItem>
          <MenuItem value="Day">Day</MenuItem>
        </Select>
      </div>

      <div className="chart">
        <Chart type="bar" height={210} options={chartOptions} series={chartSeries} />
      </div>
    </StyledRoot>;
}