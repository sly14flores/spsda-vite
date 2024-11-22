import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import Modal from '@/components/modal'; // STYLED COMPONENT

export const StyledAppModal = styled(Modal)(({
  theme
}) => ({
  maxWidth: 450,
  minWidth: 200,
  [theme.breakpoints.down(325)]: {
    maxWidth: '100%'
  }
}));