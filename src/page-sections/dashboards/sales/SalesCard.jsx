import Card from '@mui/material/Card';
import { alpha, styled } from '@mui/material/styles';
// CUSTOM COMPONENTS
import { H6, Paragraph } from '@/components/typography';
import FlexRowAlign from '@/components/flexbox/FlexRowAlign'; // CUSTOM UTILS METHOD

import { formatK } from '@/utils/currency'; // STYLED COMPONENTS

const StyledRoot = styled(Card)(({
  theme
}) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  '& .content': {
    textAlign: 'center'
  }
}));
const IconWrapper = styled('div')(({
  theme,
  color
}) => ({
  width: 40,
  height: 40,
  flexShrink: 0,
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...(color === 'primary' && {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.2)
  }),
  ...(color === 'success' && {
    color: theme.palette.success.main,
    backgroundColor: alpha(theme.palette.success.main, 0.2)
  }),
  ...(color === 'error' && {
    color: theme.palette.error.main,
    backgroundColor: alpha(theme.palette.error.main, 0.2)
  })
})); // ==============================================================

// ==============================================================
export default function SalesCard({
  list
}) {
  return <StyledRoot>
      {list.map(({
      Icon,
      amount,
      color,
      id,
      title
    }) => <FlexRowAlign key={id} flexDirection="column" gap={2}>
          <IconWrapper color={color}>
            <Icon color="inherit" />
          </IconWrapper>

          <div className="content">
            <Paragraph color="text.secondary" fontSize={12} fontWeight={600} mb={1}>
              {title}
            </Paragraph>

            <H6 fontSize={18} fontWeight={700} color={color} lineHeight={1}>
              {formatK(amount)}
            </H6>
          </div>
        </FlexRowAlign>)}
    </StyledRoot>;
}