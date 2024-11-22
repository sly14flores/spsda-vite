import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar'; // COMMON STYLED COMPONENTS

import { BodyTableCellV2, BodyTableRow, HeadTableCell } from '../../styles'; // CUSTOM DATA

import { sessionList } from '../data';
export default function LoginSessions() {
  return <Scrollbar autoHide={false}>
      <Table sx={{
      minWidth: 800
    }}>
        <TableHead>
          <TableRow>
            <HeadTableCell>Location</HeadTableCell>
            <HeadTableCell>Status</HeadTableCell>
            <HeadTableCell>Device</HeadTableCell>
            <HeadTableCell>IP Address</HeadTableCell>
            <HeadTableCell>Time</HeadTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sessionList.map(item => <BodyTableRow key={item.id}>
              <BodyTableCellV2>{item.location}</BodyTableCellV2>
              <BodyTableCellV2>
                <Chip size="small" label={item.status} color={item.status === 'Error' ? 'error' : 'success'} />
              </BodyTableCellV2>
              <BodyTableCellV2>{item.device}</BodyTableCellV2>
              <BodyTableCellV2>{item.ip}</BodyTableCellV2>
              <BodyTableCellV2>{item.time}</BodyTableCellV2>
            </BodyTableRow>)}
        </TableBody>
      </Table>
    </Scrollbar>;
}