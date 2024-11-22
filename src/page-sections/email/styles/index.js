import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENTS

export const MailActionWrapper = styled('div')(({
  theme
}) => ({
  right: 24,
  top: '50%',
  zIndex: 11,
  display: 'none',
  position: 'absolute',
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.grey[isDark(theme) ? 900 : 100]
}));
export const MailItem = styled('div')(({
  theme
}) => ({
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
  padding: '1.5rem',
  cursor: 'pointer',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${theme.palette.divider}`,
  ':hover': {
    backgroundColor: theme.palette.grey[isDark(theme) ? 900 : 100],
    '& .actions': {
      display: 'block'
    }
  }
}));
export const ImageBox = styled('div')({
  width: 210,
  height: 130,
  borderRadius: 8,
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  ':before': {
    top: 0,
    left: 0,
    opacity: 0,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
    transition: 'all 300ms',
    backgroundColor: 'black'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  ':hover': {
    ':before': {
      opacity: 0.6
    },
    '& .actions': {
      opacity: 1
    }
  }
});
export const IconWrapper = styled('div')({
  inset: 0,
  opacity: 0,
  width: '100%',
  height: '100%',
  margin: 'auto',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  transition: 'all 300ms',
  justifyContent: 'center',
  '.MuiSvgIcon-root': {
    color: 'white'
  }
});