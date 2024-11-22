import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon'; // MUI ICON COMPONENT TYPE

// ==============================================================
export default function TableMoreMenuItem(props) {
  const {
    Icon,
    title,
    handleClick
  } = props;
  return <MenuItem onClick={handleClick}>
      <ListItemIcon>
        <Icon fontSize="small" color="inherit" />
      </ListItemIcon>

      <ListItemText disableTypography>{title}</ListItemText>
    </MenuItem>;
}