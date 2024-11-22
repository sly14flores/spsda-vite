import Stack from '@mui/material/Stack';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import FlexBetween from '@/components/flexbox/FlexBetween'; // COMMON STYLED COMPONENTS

import { BodyTableCellV2, HeadTableCell } from '../styles'; // STYLED COMPONENTS

export const EarningBoxWrapper = styled(FlexBetween)(({
  theme
}) => ({
  [theme.breakpoints.down(555)]: {
    flexDirection: 'column',
    '& > .MuiButton-root': {
      width: '100%'
    }
  },
  [theme.breakpoints.down(706)]: {
    '& > .MuiButton-root': {
      marginTop: 16
    }
  }
}));
export const StyledStack = styled(Stack)(({
  theme
}) => ({
  [theme.breakpoints.down(555)]: {
    width: '100%',
    flexDirection: 'column',
    '& > .MuiBox-root': {
      marginLeft: 0,
      width: '100%',
      marginBottom: 16
    }
  }
}));
export const EarningBox = styled('div')(({
  theme
}) => ({
  width: 130,
  paddingTop: 8,
  paddingBottom: 8,
  textAlign: 'center',
  borderRadius: '8px',
  border: `1px solid ${theme.palette.grey[200]}`
}));
export const BodyTableCell = styled(BodyTableCellV2)(() => ({
  '&:first-of-type': {
    fontWeight: 500
  },
  '&:last-of-type': {
    maxWidth: 100
  }
}));
export const StyledHeadTableCell = styled(HeadTableCell)({
  '&:last-of-type': {
    maxWidth: 100
  }
});