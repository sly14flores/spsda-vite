import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled'; // STYLED COMPONENT

export const StyledIconButton = styled(IconButton)(({
  theme
}) => {
  const backgroundColor = theme.palette.background.default;
  return {
    backgroundColor,
    '&:hover': {
      backgroundColor
    },
    '& .icon': {
      fontSize: 14,
      color: theme.palette.text.secondary
    }
  };
});
export const ImageWrapper = styled('div')(({
  theme
}) => ({
  height: 200,
  width: '100%',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  transition: 'background-color 0.2s',
  '& img': {
    transition: 'all 0.3s'
  },
  '& .hover-actions': {
    gap: 8,
    zoom: 0,
    top: 15,
    right: 15,
    zIndex: 1,
    opacity: 0,
    display: 'flex',
    position: 'absolute',
    transition: 'opacity 0.22s'
  },
  '&::after': {
    top: 0,
    opacity: 0,
    width: '100%',
    content: '""',
    height: '100%',
    position: 'absolute',
    backgroundColor: theme.palette.primary[100]
  },
  '&:hover': {
    '&::after': {
      opacity: 0.5
    },
    '& .hover-actions': {
      opacity: 1
    },
    '& img': {
      transform: 'scale(1.2)'
    }
  }
}));