import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENT

import { Span } from '@/components/typography'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // CUSTOM DATA TYPE

// STYLED COMPONENT
export const StyledSpan = styled(Span, {
  shouldForwardProp: prop => prop !== 'type'
})(({
  theme,
  type
}) => ({
  fontSize: 12,
  lineHeight: 1,
  fontWeight: 500,
  borderRadius: 16,
  padding: '.25rem .4rem',
  ...(type === 'primary' && {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary[25]
  }),
  ...(type === 'success' && {
    color: theme.palette.success[500],
    backgroundColor: theme.palette.success[50]
  }),
  ...(type === 'error' && {
    color: theme.palette.error.main,
    backgroundColor: theme.palette.error[50]
  }),
  ...(isDark(theme) && {
    backgroundColor: `${theme.palette.grey[700]} !important`
  })
}));