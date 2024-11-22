import Card from '@mui/material/Card';
import styled from '@mui/material/styles/styled';
import useTheme from '@mui/material/styles/useTheme';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';
import { H6, Paragraph, Span } from '@/components/typography'; // STYLED COMPONENT

const StyledRoot = styled(Card)(({
  theme
}) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down(630)]: {
    textAlign: 'center',
    rowGap: theme.spacing(2),
    flexDirection: 'column-reverse'
  }
}));
export default function WelcomeCard() {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  const chartOptions = {
    series: [76],
    chart: {
      offsetY: -10,
      type: 'radialBar',
      background: 'none',
      sparkline: {
        enabled: true
      },
      fontFamily: theme.typography.fontFamily
    },
    plotOptions: {
      radialBar: {
        endAngle: 100,
        startAngle: -100,
        hollow: {
          size: '60%'
        },
        track: {
          background: theme.palette.divider,
          strokeWidth: '97%'
        },
        dataLabels: {
          name: {
            fontSize: '14px',
            fontWeight: '500',
            color: theme.palette.text.secondary
          },
          value: {
            offsetY: -35,
            fontSize: '14px',
            fontWeight: '600'
          }
        }
      }
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
    fill: {
      type: 'solid',
      colors: [theme.palette.primary.main]
    },
    stroke: {
      lineCap: 'round',
      curve: 'smooth'
    },
    labels: ['Progress'],
    theme: {
      mode: theme.palette.mode
    }
  };
  return <StyledRoot>
      <div>
        <H6 fontSize={18} mb={1}>
          {t('Welcome Back! Watson')}
        </H6>

        <Paragraph color="text.secondary">
          You have done <Span color="primary.main">76%</Span> more sales today. <br /> Check your
          inventory and update your stocks.
        </Paragraph>
      </div>

      <Chart height={170} options={chartOptions} series={[74]} width={200} type="radialBar" />
    </StyledRoot>;
}