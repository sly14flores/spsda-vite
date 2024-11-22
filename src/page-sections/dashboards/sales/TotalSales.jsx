import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next'; // MUI ICON COMPONENTS

import ArrowUpward from '@mui/icons-material/ArrowUpward';
import AutoAwesome from '@mui/icons-material/AutoAwesome'; // CUSTOM COMPONENTS

import { H1, H6, Paragraph } from '@/components/typography';
import FlexRowAlign from '@/components/flexbox/FlexRowAlign'; // CUSTOM UTILS METHOD

import { currency } from '@/utils/currency'; // STYLED COMPONENTS

const StyledRoot = styled(Card)(({
  theme
}) => ({
  height: '100%',
  textAlign: 'center',
  padding: theme.spacing(3),
  '& .icon-wrapper': {
    width: 45,
    height: 45,
    margin: 'auto',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: alpha(theme.palette.primary.main, 0.1)
  },
  '& .arrow-icon': {
    width: 25,
    height: 25,
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    marginBlock: '.75rem',
    justifyContent: 'center',
    backgroundColor: alpha(theme.palette.success.main, 0.1)
  }
}));
export default function TotalSales() {
  const {
    t
  } = useTranslation();
  return <StyledRoot>
      <H6 fontSize={14} mb={3}>
        {t('Total Sales')}
      </H6>

      <div className="icon-wrapper">
        <AutoAwesome color="primary" fontSize="small" />
      </div>

      <H1 fontSize={32} mt={1}>
        {currency(26543)}
      </H1>

      <FlexRowAlign gap={0.5}>
        <div className="arrow-icon">
          <ArrowUpward color="success" fontSize="small" />
        </div>

        <Paragraph fontSize={12} color="success.main" fontWeight={600}>
          +10.23%
        </Paragraph>
      </FlexRowAlign>

      <Paragraph color="text.secondary" mt={1} mb={3}>
        {t('Calculated in last 7 days')}
      </Paragraph>

      <Button size="large" variant="contained" fullWidth>
        {t('View Full Report')}
      </Button>
    </StyledRoot>;
}