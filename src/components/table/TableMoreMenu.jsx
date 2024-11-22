import { Fragment } from 'react'; // MUI

import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton'; // MUI ICON COMPONENT

import MoreVert from '@mui/icons-material/MoreVert'; // ==============================================================

// ==============================================================
export default function TableMoreMenu(props) {
  const {
    open,
    children,
    handleClose,
    handleOpen
  } = props;
  return <Fragment>
      <IconButton color="secondary" onClick={handleOpen}>
        <MoreVert fontSize="small" />
      </IconButton>

      <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose} transformOrigin={{
      vertical: 'center',
      horizontal: 'right'
    }}>
        {children}
      </Menu>
    </Fragment>;
}