import { forwardRef } from 'react';
// STYLED COMPONENT
import { StyledBadge } from './styles'; // ===================================================================

// ===================================================================
const AvatarBadge = forwardRef((props, ref) => {
  const {
    children,
    width = 25,
    height = 25,
    ...others
  } = props;
  return <StyledBadge ref={ref} width={width} height={height} overlap="circular" anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right'
  }} {...others}>
      {children}
    </StyledBadge>;
});
export default AvatarBadge;