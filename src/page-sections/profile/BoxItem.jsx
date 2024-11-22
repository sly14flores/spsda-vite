import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography';
const StyledStack = styled(Stack)(({
  theme
}) => ({
  width: 120,
  borderRadius: '8px',
  alignItems: 'center',
  padding: '1rem .5rem',
  border: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginBottom: 8
  }
})); // ============================================================================================

// ============================================================================================
export default function BoxItem({
  title,
  amount,
  color
}) {
  return <StyledStack spacing={0.5}>
      <H6 fontSize={16} color={color}>
        {amount}
      </H6>

      <Paragraph color="text.secondary">{title}</Paragraph>
    </StyledStack>;
}