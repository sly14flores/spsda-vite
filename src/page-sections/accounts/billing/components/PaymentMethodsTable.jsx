import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton'; // CUSTOM ICON COMPONENTS

import Edit from '@/icons/Edit';
import Delete from '@/icons/Delete'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import { H6, Paragraph } from '@/components/typography'; // COMMON STYLED COMPONENTS

import { BodyTableCell, BodyTableCellV2, BodyTableRow, HeadTableCell } from '../../styles';
export default function PaymentMethodsTable() {
  return <Box my={2}>
      <H6 fontSize={14} p={3} pt={0}>
        Payment Methods
      </H6>

      <Scrollbar autoHide={false}>
        <Table sx={{
        minWidth: 700
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>Card</HeadTableCell>
              <HeadTableCell>Name</HeadTableCell>
              <HeadTableCell>Expire Date</HeadTableCell>
              <HeadTableCell>Action</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {[1, 2, 3].map(item => <BodyTableRow key={item}>
                <BodyTableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar src="/static/payment/paypal-with-bg.svg" sx={{
                  borderRadius: '4px',
                  height: 27
                }} />
                    <Paragraph fontWeight={500}>Paypal **** 1679</Paragraph>
                  </Stack>
                </BodyTableCell>

                <BodyTableCellV2>Marcus Morris</BodyTableCellV2>

                <BodyTableCellV2>09/24/2022</BodyTableCellV2>

                <BodyTableCellV2>
                  <IconButton size="small" color="inherit">
                    <Edit fontSize="small" />
                  </IconButton>

                  <IconButton color="inherit">
                    <Delete fontSize="small" />
                  </IconButton>
                </BodyTableCellV2>
              </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Box>;
}