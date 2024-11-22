import MuiModal from '@mui/material/Modal'; // STYLED COMPONENT

import { StyledScrollbar, Wrapper } from './styles'; // ===========================================================================

// ===========================================================================
export default function Modal({
  children,
  open,
  handleClose,
  ...props
}) {
  return <MuiModal open={open} onClose={handleClose}>
      <Wrapper {...props}>
        <StyledScrollbar>{children}</StyledScrollbar>
      </Wrapper>
    </MuiModal>;
}