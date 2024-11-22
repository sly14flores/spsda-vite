import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom'; // ==============================================================

// ==============================================================
export default forwardRef(({
  href,
  ...others
}, ref) => {
  return <RouterLink ref={ref} to={href} {...others} />;
});