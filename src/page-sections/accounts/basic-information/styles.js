import styled from '@mui/material/styles/styled'; // STYLED COMPONENTS

export const CoverPicWrapper = styled('div')(({
  theme
}) => ({
  top: 0,
  left: 0,
  height: 125,
  width: '100%',
  overflow: 'hidden',
  position: 'absolute',
  backgroundColor: theme.palette.background.default,
  img: {
    objectFit: 'cover'
  }
}));
export const ContentWrapper = styled('div')(({
  theme
}) => ({
  zIndex: 1,
  marginTop: 55,
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 20,
    paddingRight: 20
  }
}));
export const ProgressWrapper = styled('div')(({
  theme
}) => ({
  minWidth: 200,
  color: theme.palette.grey[500],
  [theme.breakpoints.down(600)]: {
    minWidth: '100%',
    marginBottom: '1rem'
  }
}));