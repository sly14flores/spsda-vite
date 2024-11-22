import Card from '@mui/material/Card';
import ButtonBase from '@mui/material/ButtonBase';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import { H6, Span } from '@/components/typography'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENTS

const StyledRoot = styled(Card)(({
  theme
}) => ({
  height: '100%',
  position: 'relative',
  padding: '1rem 1.5rem',
  background: isDark(theme) ? theme.palette.background.paper : 'linear-gradient(250.16deg, #FFFFFF 2.51%, rgba(213, 241, 255, 0.54) 96.8%)',
  '& .img-wrapper': {
    right: 0,
    width: 150,
    bottom: -10,
    position: 'absolute'
  },
  '& .content': {
    width: '100%',
    maxWidth: 200
  }
}));
const StyledButton = styled(ButtonBase)(({
  theme
}) => ({
  fontWeight: 500,
  borderRadius: '8px',
  padding: '0.8rem 2rem',
  color: theme.palette.common.white,
  background: 'linear-gradient(180deg, rgba(0, 172, 255, 0.46) 0%, rgba(189, 0, 255, 0.345) 100%)'
}));
export default function UpgradeCard() {
  return <StyledRoot>
      <div className="content">
        <H6 fontSize={18} mb={2}>
          Upgrade to <Span color="primary.main">PRO</Span> for more resources
        </H6>

        <StyledButton>Upgrade Now</StyledButton>
      </div>

      <div className="img-wrapper">
        <img src="/static/illustration/upgrade-pro.png" width="100%" alt="Upgrade Pro" />
      </div>
    </StyledRoot>;
}