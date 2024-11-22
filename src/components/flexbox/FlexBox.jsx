import { forwardRef } from 'react';
import Box from '@mui/material/Box';
const FlexBox = forwardRef(({
  children,
  ...props
}, ref) => <Box display="flex" ref={ref} {...props}>
    {children}
  </Box>);
export default FlexBox;