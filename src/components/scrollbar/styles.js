import { alpha } from '@mui/system/colorManipulator';
import styled from '@mui/material/styles/styled';
import SimpleBar from 'simplebar-react'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENT

export const StyledScrollBar = styled(SimpleBar)(({
  theme
}) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&.simplebar-visible:before': {
      opacity: 1
    },
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[isDark(theme) ? 700 : 300], 0.6)
    }
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 9
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6
  },
  '& .simplebar-mask': {
    zIndex: 'inherit'
  }
}));