import { forwardRef } from 'react';
import Box from '@mui/material/Box';
const FlexBetween = forwardRef(({
  children,
  ...props
}, ref) => <Box display="flex" alignItems="center" justifyContent="space-between" ref={ref} {...props}>
    {children}
  </Box>);
export default FlexBetween;