import { useState } from 'react'; // MUI

import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem'; // MUI ICON COMPONENT

import Tune from '@mui/icons-material/Tune';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'; // CUSTOM COMPONENTS

import FlexBetween from '@/components/flexbox/FlexBetween';
const SORTBY_VALUES = [{
  value: 'featured',
  label: 'Featured'
}, {
  value: 'best-selling',
  label: 'Best Selling'
}, {
  value: 'low-to-high',
  label: 'Price: Low to High'
}, {
  value: 'high-to-low',
  label: 'Price: High to Low'
}]; // ==============================================================

// ==============================================================
export default function FilterActions({
  handleSidebar,
  onSortByChange,
  sortBy
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenOptions = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectItem = item => {
    onSortByChange(item);
    setAnchorEl(null);
  };

  const handleCloseOptions = () => {
    setAnchorEl(null);
  };

  const activeValue = SORTBY_VALUES.find(item => item.value === sortBy);
  return <FlexBetween gap={2} mb={4}>
      <Button size="large" color="secondary" variant="outlined" startIcon={<Tune />} onClick={handleSidebar}>
        Filter
      </Button>

      <Button size="large" color="secondary" variant="outlined" onClick={handleOpenOptions} endIcon={<KeyboardArrowDown />} aria-expanded={open ? 'true' : undefined}>
        Sort By: {activeValue ? activeValue.label : 'Featured'}
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseOptions}>
        {SORTBY_VALUES.map(option => <MenuItem key={option.value} onClick={() => handleSelectItem(option.value)}>
            {option.label}
          </MenuItem>)}
      </Menu>
    </FlexBetween>;
}