import Card from '@mui/material/Card';
import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/system/colorManipulator';
import { useTranslation } from 'react-i18next'; // MUI ICON COMPONENTS

import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography'; // STYLED COMPONENTS

const StyledRoot = styled(Card)(() => ({
  padding: '1rem 1.5rem',
  '& .analytics': {
    gap: 4,
    display: 'flex',
    alignItems: 'center'
  }
}));
const IconWrapper = styled('div', {
  shouldForwardProp: prop => prop !== 'isDown'
})(({
  theme,
  isDown
}) => ({
  width: 20,
  height: 20,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: alpha(theme.palette.success.main, 0.1),
  ...(isDown && {
    backgroundColor: alpha(theme.palette.error.main, 0.1)
  })
})); // ==============================================================

// ==============================================================
export default function InfoCard({
  title,
  percentage,
  amount,
  trend
}) {
  const {
    t
  } = useTranslation();
  const color = trend === 'up' ? 'success.main' : 'error.main';
  return <StyledRoot>
      <Paragraph color="text.secondary" fontWeight={500}>
        {t(title)}
      </Paragraph>

      <H6 py={1} fontSize={24}>
        {amount}
      </H6>

      <div className="analytics">
        <IconWrapper isDown={trend === 'down'}>
          {trend === 'up' && <ArrowUpward className="icon" sx={{
          fontSize: 14,
          color
        }} />}
          {trend === 'down' && <ArrowDownward sx={{
          fontSize: 14,
          color
        }} />}
        </IconWrapper>

        <Paragraph fontSize={12} fontWeight={600} color={color}>
          {trend === 'down' ? `-${percentage}%` : `+${percentage}%`}
        </Paragraph>
      </div>
    </StyledRoot>;
}