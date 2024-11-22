import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled'; // STYLED COMPONENTS

export const CarouselRoot = styled('div')(({
  theme
}) => ({
  position: 'relative',
  '& .slide': {
    objectFit: 'cover',
    borderRadius: 8
  }
}));
export const SlideThumb = styled('div')(({
  theme
}) => ({
  width: 60,
  height: 55,
  opacity: 0.6,
  borderRadius: 4,
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  '&.active': {
    opacity: 1
  },
  '&.active::after': {
    height: 3
  },
  '&::after': {
    left: 0,
    height: 0,
    bottom: 0,
    content: '""',
    width: '100%',
    position: 'absolute',
    transition: '0.3s ease-in-out',
    backgroundColor: theme.palette.primary.main
  },
  '& img': {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover'
  }
}));
export const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  top: 10,
  right: 10,
  position: 'absolute',
  backgroundColor: theme.palette.grey[200] // '&:hover': { backgroundColor: theme.palette.grey[400] },

}));