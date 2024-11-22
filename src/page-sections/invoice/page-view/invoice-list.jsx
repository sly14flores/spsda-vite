import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // MUI

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination'; // CUSTOM COMPONENTS

import { H5 } from '@/components/typography';
import Scrollbar from '@/components/scrollbar';
import IconWrapper from '@/components/icon-wrapper';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { TableDataNotFound, TableToolbar } from '@/components/table'; // CUSTOM DEFINED HOOK

import useMuiTable, { getComparator, stableSort } from '@/hooks/useMuiTable'; // CUSTOM ICON COMPONENTS

import Add from '@/icons/Add';
import Invoice from '@/icons/sidebar/Invoice'; // CUSTOM PAGE SECTION COMPONENTS

import InvoiceTableRow from '../InvoiceTableRow';
import InvoiceTableHead from '../InvoiceTableHead';
import InvoiceTableActions from '../InvoiceTableActions'; // CUSTOM DUMMY DATA

import { INVOICE_LIST } from '@/__fakeData__/invoices';
export default function InvoiceListPageView() {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([...INVOICE_LIST]);
  const [invoiceFilter, setInvoiceFilter] = useState({
    search: '',
    status: ''
  });

  const handleChangeFilter = (key, value) => {
    setInvoiceFilter(state => ({ ...state,
      [key]: value
    }));
  };

  const {
    page,
    order,
    orderBy,
    selected,
    rowsPerPage,
    isSelected,
    handleSelectRow,
    handleChangePage,
    handleRequestSort,
    handleSelectAllRows,
    handleChangeRowsPerPage
  } = useMuiTable({
    defaultOrderBy: 'name'
  });
  const filteredInvoices = stableSort(invoices, getComparator(order, orderBy)).filter(item => {
    if (invoiceFilter.status === 'pending') {
      return item.status === 'Pending';
    } else if (invoiceFilter.status === 'complete') {
      return item.status === 'Complete';
    } else {
      return item.name.toLowerCase().includes(invoiceFilter.search.toLowerCase()) || item.email.toLowerCase().includes(invoiceFilter.search.toLowerCase());
    }
  });

  const handleDeleteInvoice = id => {
    setInvoices(state => state.filter(item => item.id !== id));
  };

  const handleAllDeleteInvoice = () => {
    setInvoices(state => state.filter(item => !selected.includes(item.id)));
    handleSelectAllRows([])();
  };

  return <Card>
      <FlexBetween flexWrap="wrap" gap={2} p={2} pt={2.5}>
        <Stack direction="row" alignItems="center">
          <IconWrapper>
            <Invoice color="primary" />
          </IconWrapper>

          <H5 fontSize={16}>Invoice List</H5>
        </Stack>

        <Button variant="contained" startIcon={<Add />} onClick={() => navigate('/dashboard/create-invoice')}>
          Add New Invoice
        </Button>
      </FlexBetween>

      {
      /* INVOICE FILTER ACTION BAR */
    }
      <InvoiceTableActions filter={invoiceFilter} handleChangeFilter={handleChangeFilter} />

      {
      /* TABLE ROW SELECTION HEADER  */
    }
      {selected.length > 0 && <TableToolbar selected={selected.length} handleDeleteRows={handleAllDeleteInvoice} />}

      {
      /* TABLE HEAD & BODY ROWS */
    }
      <TableContainer>
        <Scrollbar autoHide={false}>
          <Table sx={{
          minWidth: 900
        }}>
            {
            /* TABLE HEAD SECTION */
          }
            <InvoiceTableHead order={order} orderBy={orderBy} numSelected={selected.length} rowCount={filteredInvoices.length} onRequestSort={handleRequestSort} onSelectAllRows={handleSelectAllRows(filteredInvoices.map(row => row.id))} />

            {
            /* TABLE BODY & DATA SECTION */
          }
            <TableBody>
              {filteredInvoices.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(invoice => <InvoiceTableRow key={invoice.id} invoice={invoice} handleSelectRow={handleSelectRow} isSelected={isSelected(invoice.id)} handleDeleteInvoice={handleDeleteInvoice} />)}

              {filteredInvoices.length === 0 && <TableDataNotFound />}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      {
      /* TABLE PAGINATION SECTION */
    }
      <TablePagination page={page} component="div" rowsPerPage={rowsPerPage} count={filteredInvoices.length} onPageChange={handleChangePage} rowsPerPageOptions={[5, 10, 25]} onRowsPerPageChange={handleChangeRowsPerPage} />
    </Card>;
}