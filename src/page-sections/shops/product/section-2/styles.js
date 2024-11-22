import styled from '@mui/material/styles/styled';
export const CarouselRoot = styled('div')(() => ({
  position: 'relative',
  '& .slide': {
    objectFit: 'cover',
    borderRadius: 8
  }
}));
export const SlideThumb = styled('div')(({
  theme
}) => ({
  width: 80,
  height: 80,
  opacity: 0.6,
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: '.5rem',
  border: '1px solid transparent',
  transition: '0.3s ease-in-out',
  '&.active': {
    border: `1px solid ${theme.palette.primary.main}`,
    opacity: 1
  },
  '& img': {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover'
  }
}));