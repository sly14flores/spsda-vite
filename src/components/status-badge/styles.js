import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import { Paragraph } from '@/components/typography'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // CUSTOM DATA TYPE

// STYLED COMPONENT
export const Status = styled(Paragraph, {
  shouldForwardProp: prop => prop !== 'type'
})(({
  theme,
  type
}) => ({
  borderRadius: 6,
  padding: '.2rem .7rem',
  display: 'inline-block',
  ...(type === 'warning' && {
    color: theme.palette.warning[600],
    backgroundColor: theme.palette.warning[50]
  }),
  ...(type === 'success' && {
    color: theme.palette.success[600],
    backgroundColor: theme.palette.success[50]
  }),
  ...(type === 'primary' && {
    color: theme.palette.primary[500],
    backgroundColor: theme.palette.primary[50]
  }),
  ...(type === 'error' && {
    color: theme.palette.error[500],
    backgroundColor: theme.palette.error[50]
  }),
  ...(isDark(theme) && {
    backgroundColor: `${theme.palette.grey[700]} !important`
  })
}));