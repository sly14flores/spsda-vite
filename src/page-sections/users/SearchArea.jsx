import { useLocation, useNavigate } from 'react-router-dom'; // MUI

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton'; // MUI ICON COMPONENT

import Search from '@mui/icons-material/Search'; // CUSTOM COMPONENTS

import FlexBetween from '@/components/flexbox/FlexBetween'; // CUSTOM ICON COMPONENTS

import Apps from '@/icons/Apps';
import FormatBullets from '@/icons/FormatBullets'; // ==========================================================================================

// ==========================================================================================
export default function SearchArea(props) {
  const {
    value = '',
    onChange,
    gridRoute,
    listRoute
  } = props;
  const navigate = useNavigate();
  const {
    pathname
  } = useLocation();

  const activeColor = path => pathname === path ? 'primary.main' : 'grey.400';

  return <FlexBetween gap={1} my={3}>
      {
      /* SEARCH BOX */
    }
      <TextField value={value} onChange={onChange} placeholder="Search..." slotProps={{
      input: {
        startAdornment: <Search />
      }
    }} sx={{
      maxWidth: 400,
      width: '100%'
    }} />

      {
      /* NAVIGATION BUTTONS */
    }
      <Box flexShrink={0} className="actions">
        <IconButton onClick={() => navigate(listRoute)}>
          <FormatBullets sx={{
          color: activeColor(listRoute)
        }} />
        </IconButton>

        <IconButton onClick={() => navigate(gridRoute)}>
          <Apps sx={{
          color: activeColor(gridRoute)
        }} />
        </IconButton>
      </Box>
    </FlexBetween>;
}