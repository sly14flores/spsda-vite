// MUI
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import visuallyHidden from '@mui/utils/visuallyHidden'; // CUSTOM COMPONENT

import { Span } from '@/components/typography'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // ==============================================================

// ==============================================================
const headCells = [{
  id: 'name',
  numeric: false,
  disablePadding: false,
  label: 'Product'
}, {
  id: 'createdAt',
  numeric: true,
  disablePadding: false,
  label: 'Created At'
}, {
  id: 'stock',
  numeric: true,
  disablePadding: false,
  label: 'Stock'
}, {
  id: 'price',
  numeric: true,
  disablePadding: false,
  label: 'Price'
}, {
  id: 'publish',
  numeric: true,
  disablePadding: false,
  label: 'Publish'
}, {
  id: ''
}];
export default function ProductTableHead(props) {
  const {
    onSelectAllRows,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return <TableHead sx={{
    backgroundColor: theme => isDark(theme) ? 'grey.700' : 'grey.100'
  }}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox size="small" color="primary" onChange={onSelectAllRows} checked={rowCount > 0 && numSelected === rowCount} indeterminate={numSelected > 0 && numSelected < rowCount} />
        </TableCell>

        {headCells.map(headCell => <TableCell key={headCell.id} padding={headCell.disablePadding ? 'none' : 'normal'} sortDirection={orderBy === headCell.id ? order : false} sx={{
        color: 'text.primary',
        fontWeight: 600
      }}>
            <TableSortLabel active={orderBy === headCell.id} onClick={createSortHandler(headCell.id)} direction={orderBy === headCell.id ? order : 'asc'}>
              {headCell.label}
              {orderBy === headCell.id ? <Span sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Span> : null}
            </TableSortLabel>
          </TableCell>)}
      </TableRow>
    </TableHead>;
}