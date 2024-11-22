import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns'; // MUI

import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell'; // MUI ICON COMPONENTS

import Edit from '@mui/icons-material/Edit';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import DeleteOutline from '@mui/icons-material/DeleteOutline'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph } from '@/components/typography';
import { TableMoreMenuItem, TableMoreMenu } from '@/components/table'; // ==============================================================

// ==============================================================
export default function ProductTableRow({
  product,
  isSelected,
  handleSelectRow,
  handleDeleteProduct
}) {
  const navigate = useNavigate();
  const [openMenuEl, setOpenMenuEl] = useState(null);

  const handleOpenMenu = event => {
    setOpenMenuEl(event.currentTarget);
  };

  const handleCloseOpenMenu = () => setOpenMenuEl(null);

  return <TableRow hover>
      <TableCell padding="checkbox">
        <Checkbox size="small" color="primary" checked={isSelected} onClick={event => handleSelectRow(event, product.id)} />
      </TableCell>

      <TableCell padding="normal">
        <FlexBox alignItems="center" gap={2}>
          <Avatar variant="rounded" alt={product.name} src={product.image} sx={{
          width: 50,
          height: 50
        }} />

          <div>
            <Paragraph fontWeight={500} color="text.primary" sx={{
            ':hover': {
              textDecoration: 'underline',
              cursor: 'pointer'
            }
          }}>
              {product.name}
            </Paragraph>
            <Paragraph fontSize={13}>{product.category}</Paragraph>
          </div>
        </FlexBox>
      </TableCell>

      <TableCell padding="normal">{format(new Date(product.createdAt), 'dd MMM yyyy')}</TableCell>

      <TableCell padding="normal" sx={{ ...(product.stock === 0 && {
        color: 'error.main'
      })
    }}>
        {product.stock}
      </TableCell>

      <TableCell padding="normal">${product.price}</TableCell>

      <TableCell padding="normal">
        {product.published ? <Chip label="Published" /> : <Chip label="Draft" color="secondary" />}
      </TableCell>

      <TableCell padding="normal" align="right">
        <TableMoreMenu open={openMenuEl} handleOpen={handleOpenMenu} handleClose={handleCloseOpenMenu}>
          <TableMoreMenuItem Icon={RemoveRedEye} title="View" handleClick={() => {
          handleCloseOpenMenu();
          navigate('/dashboard/product-details');
        }} />
          <TableMoreMenuItem Icon={Edit} title="Edit" handleClick={() => {
          handleCloseOpenMenu();
          navigate('/dashboard/create-product');
        }} />
          <TableMoreMenuItem Icon={DeleteOutline} title="Delete" handleClick={() => {
          handleCloseOpenMenu();
          handleDeleteProduct(product.id);
        }} />
        </TableMoreMenu>
      </TableCell>
    </TableRow>;
}