import { forwardRef } from 'react';
// CUSTOM COMPONENT
import { Paragraph } from '../typography'; // STYLED COMPONENT

import { StyledCard } from './styles'; // ==============================================================

// ==============================================================
export default forwardRef(({
  title,
  children,
  bgTransparent = false,
  ...props
}, ref) => <StyledCard ref={ref} bg={bgTransparent ? 1 : 0} {...props}>
      <Paragraph mb={3} fontSize={18} fontWeight={600}>
        {title}
      </Paragraph>

      {children}
    </StyledCard>);