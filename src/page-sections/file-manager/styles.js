import styled from '@mui/material/styles/styled'; // STYLED COMPONENTS

export const HeadingWrapper = styled('div')(({
  theme
}) => ({
  padding: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down(665)]: {
    rowGap: 12,
    alignItems: 'start',
    flexDirection: 'column'
  },
  [theme.breakpoints.down(426)]: {
    '.search': {
      flex: 1,
      flexWrap: 'wrap'
    },
    '.MuiTextField-root': {
      width: '100%'
    },
    '.MuiButton-root': {
      width: '100%'
    }
  }
}));