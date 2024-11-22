import { useState } from 'react'; // MUI

import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import MenuItem from '@mui/material/MenuItem';
// MUI ICON COMPONENT
import MoreVert from '@mui/icons-material/MoreVert';
// STYLED COMPONENT
import { StyledIconButton } from './styles';
const optionList = ['Create', 'Edit', 'Delete']; // ==============================================================

// ==============================================================
export default function MoreButton({
  size = 'large',
  Icon = MoreVert,
  options = optionList,
  renderOptions,
  ...props
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setAnchorEl(null);

  return <div>
      <StyledIconButton size={size} aria-label="more" aria-haspopup="true" onClick={e => setAnchorEl(e.currentTarget)} {...props}>
        <Icon fontSize="small" />
      </StyledIconButton>

      <Menu anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)} TransitionComponent={Fade}>
        {renderOptions ? renderOptions(handleClose) : options.map(option => <MenuItem key={option} onClick={handleClose}>
                {option}
              </MenuItem>)}
      </Menu>
    </div>;
}