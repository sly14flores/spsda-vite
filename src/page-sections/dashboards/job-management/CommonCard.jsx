import TrendingUp from '@mui/icons-material/TrendingUp';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import useTheme from '@mui/material/styles/useTheme';
import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/system/colorManipulator';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import FlexBox from '@/components/flexbox/FlexBox';
import { H6, Paragraph } from '@/components/typography'; // STYLED COMPONENTS

const StyledRoot = styled(Card)(({
  theme
}) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '1.5rem',
  '& .avatar': {
    width: 25,
    height: 25,
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1)
  }
})); // ==============================================================

// ==============================================================
export default function CommonCard({
  card
}) {
  const theme = useTheme();
  const chartOptions = {
    colors: [theme.palette.primary.main],
    chart: {
      background: 'none'
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '55%'
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: 8,
            fontSize: '18px',
            fontWeight: 600,
            formatter: value => `+${value}%`,
            color: theme.palette.primary.main,
            fontFamily: theme.typography.fontFamily
          }
        },
        track: {
          strokeWidth: '100%',
          background: theme.palette.primary[100]
        }
      }
    },
    states: {
      normal: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      },
      active: {
        filter: {
          type: 'none'
        }
      }
    },
    stroke: {
      curve: 'smooth',
      lineCap: 'round'
    },
    theme: {
      mode: theme.palette.mode
    }
  };
  return <StyledRoot>
      <div>
        <Paragraph fontWeight={500} color="text.secondary">
          {card.title}
        </Paragraph>

        <H6 fontSize={24}>{card.amount}</H6>

        <FlexBox gap={1} alignItems="center" mt={1}>
          <Avatar className="avatar">
            <TrendingUp sx={{
            fontSize: 16,
            color: 'inherit'
          }} />
          </Avatar>

          <Paragraph fontWeight={500}>+{card.trend}% Inc</Paragraph>
        </FlexBox>
      </div>

      <Chart width={160} height={140} type="radialBar" options={chartOptions} series={[card.progress]} />
    </StyledRoot>;
}