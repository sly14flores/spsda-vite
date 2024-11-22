import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // MUI

import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell'; // MUI ICON COMPONENTS

import Edit from '@mui/icons-material/Edit';
import DeleteOutline from '@mui/icons-material/DeleteOutline'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph } from '@/components/typography';
import { TableMoreMenuItem, TableMoreMenu } from '@/components/table'; // ==============================================================

// ==============================================================
export default function UserTableRow(props) {
  const {
    user,
    isSelected,
    handleSelectRow,
    handleDeleteUser
  } = props;
  const navigate = useNavigate();
  const [openMenuEl, setOpenMenuEl] = useState(null);

  const handleOpenMenu = event => {
    setOpenMenuEl(event.currentTarget);
  };

  const handleCloseOpenMenu = () => setOpenMenuEl(null);

  return <TableRow hover>
      <TableCell padding="checkbox">
        <Checkbox size="small" color="primary" checked={isSelected} onClick={event => handleSelectRow(event, user.id)} />
      </TableCell>

      <TableCell padding="normal">
        <FlexBox alignItems="center" gap={2}>
          <Avatar src={user.avatar} alt={user.name} variant="rounded" />

          <div>
            <Paragraph fontWeight={500} color="text.primary" sx={{
            ':hover': {
              textDecoration: 'underline',
              cursor: 'pointer'
            }
          }}>
              {user.name}
            </Paragraph>

            <Paragraph fontSize={13}>#{user.id.substring(0, 11)}</Paragraph>
          </div>
        </FlexBox>
      </TableCell>

      <TableCell padding="normal">{user.email}</TableCell>

      <TableCell padding="normal">{user.company}</TableCell>

      <TableCell padding="normal">{user.role}</TableCell>

      <TableCell padding="normal">
        <TableMoreMenu open={openMenuEl} handleOpen={handleOpenMenu} handleClose={handleCloseOpenMenu}>
          <TableMoreMenuItem Icon={Edit} title="Edit" handleClick={() => {
          handleCloseOpenMenu();
          navigate('/dashboard/add-user');
        }} />

          <TableMoreMenuItem Icon={DeleteOutline} title="Delete" handleClick={() => {
          handleCloseOpenMenu();
          handleDeleteUser(user.id);
        }} />
        </TableMoreMenu>
      </TableCell>
    </TableRow>;
}