import { forwardRef } from 'react';
// STYLED COMPONENT
import { StyledAvatar } from './styles'; // ==============================================================

// ==============================================================
const AvatarLoading = forwardRef((props, ref) => {
  const {
    percentage,
    alt = 'user',
    borderSize = 1,
    src = '/static/user/user-11.png',
    ...others
  } = props;
  return <StyledAvatar ref={ref} alt={alt} src={src} borderSize={borderSize} deg={Math.round(percentage / 100 * 360)} {...others} />;
});
export default AvatarLoading;