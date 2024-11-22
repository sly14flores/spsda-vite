import { styled, alpha } from '@mui/material/styles';
export const RootStyle = styled('div', {
  shouldForwardProp: prop => prop !== 'space'
})(({
  space
}) => ({
  '.slick-list': {
    marginInline: -space
  },
  '.slick-slide': {
    paddingInline: space
  },
  ':hover .slick-arrow': {
    opacity: 1,
    '&.next': {
      right: 6
    },
    '&.prev': {
      left: 6
    }
  }
}));
export const DotList = styled('ul')(({
  theme
}) => ({
  gap: 8,
  zIndex: 1,
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& li': {
    width: 8,
    height: 8,
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.4s',
    color: theme.palette.grey[400],
    backgroundColor: 'transparent',
    '&.slick-active span': {
      backgroundColor: theme.palette.primary.main,
      boxShadow: `${alpha(theme.palette.primary.main, 0.1)} 0px 0px 0px 4px`
    }
  }
}));
export const Dot = styled('span', {
  shouldForwardProp: prop => prop !== 'dotColor'
})(({
  dotColor,
  theme
}) => ({
  width: '100%',
  height: '100%',
  borderRadius: 12,
  cursor: 'pointer',
  position: 'relative',
  backgroundColor: dotColor || theme.palette.grey[300]
}));
export const ArrowButton = styled('div')(({
  theme
}) => ({
  zIndex: 1,
  width: 35,
  height: 35,
  padding: 0,
  opacity: 0,
  top: '50%',
  display: 'flex',
  cursor: 'pointer',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translate(0, -50%)',
  transition: 'all 0.2s ease-in-out',
  borderRadius: '50%',
  backgroundColor: theme.palette.common.white,
  '&.prev': {
    left: 0
  },
  '&.next': {
    right: 0
  },
  '&.slick-disabled': {
    visibility: 'hidden'
  },
  ...(theme.direction === 'rtl' && {
    '.back-icon, .forward-icon': {
      rotate: '180deg'
    }
  })
}));