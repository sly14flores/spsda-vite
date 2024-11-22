import { forwardRef } from 'react';
// STYLED COMPONENT
import { Wrapper } from './styles';
export default forwardRef(({
  children,
  ...props
}, ref) => <Wrapper ref={ref} {...props}>
    {children}
  </Wrapper>);