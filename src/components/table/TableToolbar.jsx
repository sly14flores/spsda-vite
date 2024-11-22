import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton'; // MUI ICON COMPONENT

import Delete from '@mui/icons-material/Delete'; // CUSTOM COMPONENT

import { Paragraph } from '@/components/typography'; // ==============================================================

// ==============================================================
export default function TableToolbar({
  selected,
  handleDeleteRows
}) {
  return <Toolbar sx={{
    backgroundColor: 'action.selected'
  }}>
      <Paragraph fontWeight={600} flex="1 1 100%" color="inherit">
        {selected} selected
      </Paragraph>

      <Tooltip title="Delete">
        <IconButton onClick={handleDeleteRows}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Toolbar>;
}