import styled from '@mui/material/styles/styled';
export const StyledRoot = styled('div', {
  shouldForwardProp: prop => prop !== 'active'
})(({
  theme,
  active
}) => ({
  display: 'flex',
  lineHeight: 1,
  cursor: 'pointer',
  paddingBlock: 12,
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.palette.grey[400],
  '& .title': {
    color: 'inherit'
  },
  '& .badge': {
    color: 'inherit'
  },
  '& .MuiSvgIcon-root': {
    color: 'inherit'
  },
  ...(active && {
    color: theme.palette.primary.main
  })
}));