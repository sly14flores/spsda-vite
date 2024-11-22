import { forwardRef } from 'react';
// CUSTOM ICON COMPONENT
import SearchIcon from '@/icons/SearchIcon'; // STYLED COMPONENT

import { StyledInputBase } from './styles'; // ========================================================================

// ========================================================================
export default forwardRef(({
  bordered = true,
  ...props
}, ref) => {
  // SEARCH ICON
  const ADORNMENT = <SearchIcon sx={{
    mr: 1,
    fontSize: 18,
    color: 'text.secondary'
  }} />;
  return <StyledInputBase ref={ref} border={bordered ? 1 : 0} startAdornment={ADORNMENT} {...props} />;
});