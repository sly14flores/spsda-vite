import { useState } from 'react'; // MUI

import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell'; // MUI ICON COMPONENTS

import Edit from '@mui/icons-material/Edit';
import Folder from '@mui/icons-material/Folder';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import DeleteOutline from '@mui/icons-material/DeleteOutline'; // CUSTOM COMPONENTS

import { H6 } from '@/components/typography';
import FlexBox from '@/components/flexbox/FlexBox';
import { TableMoreMenuItem, TableMoreMenu } from '@/components/table'; // ==============================================================

// ==============================================================
export default function FileManagerTableRow({
  data,
  isSelected,
  handleSelectRow,
  handleDeleteFile
}) {
  const [openMenuEl, setOpenMenuEl] = useState(null);

  const handleOpenMenu = event => {
    setOpenMenuEl(event.currentTarget);
  };

  const handleCloseOpenMenu = () => setOpenMenuEl(null);

  return <TableRow hover>
      <TableCell padding="checkbox">
        <Checkbox size="small" color="primary" checked={isSelected} onClick={event => handleSelectRow(event, data.id)} />
      </TableCell>

      <TableCell padding="normal">
        <FlexBox className="name" alignItems="center" gap={1.5}>
          <Folder />
          <H6 fontSize={14} color="text.primary">
            {data.title}
          </H6>
        </FlexBox>
      </TableCell>

      <TableCell padding="normal">{data.files}</TableCell>

      <TableCell padding="normal">{data.size}</TableCell>

      <TableCell padding="normal">{data.createdAt}</TableCell>

      <TableCell padding="normal" align="right">
        <TableMoreMenu open={openMenuEl} handleOpen={handleOpenMenu} handleClose={handleCloseOpenMenu}>
          <TableMoreMenuItem Icon={RemoveRedEye} title="View" handleClick={() => {
          handleCloseOpenMenu();
        }} />

          <TableMoreMenuItem Icon={Edit} title="Edit" handleClick={() => {
          handleCloseOpenMenu();
        }} />

          <TableMoreMenuItem Icon={DeleteOutline} title="Delete" handleClick={() => {
          handleDeleteFile(data.id);
          handleCloseOpenMenu();
        }} />
        </TableMoreMenu>
      </TableCell>
    </TableRow>;
}