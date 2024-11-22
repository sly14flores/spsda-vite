import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography'; // CUSTOM UTILS METHOD

import { currency } from '@/utils/currency'; // STYLED COMPONENTS

const StyledRoot = styled(Card)(({
  theme
}) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  '& .content': {
    flex: 1
  },
  '& .img-wrapper': {
    height: 120,
    '& img': {
      objectFit: 'cover',
      objectPosition: 'bottom'
    }
  },
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    rowGap: theme.spacing(5),
    flexDirection: 'column-reverse'
  }
}));
export default function EarningCard() {
  return <StyledRoot>
      <div className="content">
        <Paragraph fontWeight={600} color="text.secondary">
          Earnings
        </Paragraph>

        <H6 mt={0.5} mb={3} fontSize={24}>
          {currency(74438.78)}
        </H6>

        <Button variant="contained">Download</Button>
      </div>

      <div className="img-wrapper">
        <img src="/static/illustration/sales-earning.svg" width="100%" alt="Earnings" />
      </div>
    </StyledRoot>;
}