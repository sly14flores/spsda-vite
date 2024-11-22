import { forwardRef } from 'react';
import Box from '@mui/material/Box';
const FlexRowAlign = forwardRef(({
  children,
  ...props
}, ref) => <Box display="flex" alignItems="center" justifyContent="center" ref={ref} {...props}>
    {children}
  </Box>);
export default FlexRowAlign;