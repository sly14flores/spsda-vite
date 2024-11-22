import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton'; // CUSTOM ICON COMPONENTS

import Edit from '@/icons/Edit';
import Delete from '@/icons/Delete'; // CUSTOM COMPONENTS

import { H6 } from '@/components/typography';
import Scrollbar from '@/components/scrollbar'; // COMMON STYLED COMPONENTS

import { BodyTableCellV2, BodyTableRow, HeadTableCell } from '../../styles'; // CUSTOM DATA

import { BILLING_HISTORY } from '../data';
export default function HistoryTable() {
  return <Box mb={2}>
      <H6 fontSize={14} padding={3} pt={2}>
        Billing History
      </H6>

      <Scrollbar autoHide={false}>
        <Table sx={{
        minWidth: 700
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>Description</HeadTableCell>
              <HeadTableCell>Amount</HeadTableCell>
              <HeadTableCell>Invoice</HeadTableCell>
              <HeadTableCell>Date</HeadTableCell>
              <HeadTableCell>Action</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {BILLING_HISTORY.map(item => <BodyTableRow key={item.id}>
                <BodyTableCellV2>{item.description}</BodyTableCellV2>
                <BodyTableCellV2>${item.amount}</BodyTableCellV2>

                <BodyTableCellV2>
                  <Chip label={item.invoice} color="secondary" size="small" />
                </BodyTableCellV2>

                <BodyTableCellV2>{item.date}</BodyTableCellV2>

                <BodyTableCellV2>
                  <IconButton>
                    <Edit fontSize="small" sx={{
                  color: 'text.secondary'
                }} />
                  </IconButton>

                  <IconButton>
                    <Delete fontSize="small" sx={{
                  color: 'text.secondary'
                }} />
                  </IconButton>
                </BodyTableCellV2>
              </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Box>;
}