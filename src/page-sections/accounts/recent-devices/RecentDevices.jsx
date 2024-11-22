import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import { FlexBetween, FlexBox } from '@/components/flexbox';
import { H6, Paragraph, Small } from '@/components/typography'; // COMMON STYLED COMPONENTS

import { HeadTableCell, BodyTableCell, BodyTableRow } from '../styles'; // CUSTOM DUMMY DATA SET

import { ACTIVITY_LIST, HEAD_CELLS } from './data';
export default function RecentDevices() {
  return <Card sx={{
    pb: 1
  }}>
      <FlexBetween padding={3} flexWrap="wrap">
        <H6 fontSize={14}>Recent Devices</H6>
        <Small>View and manage devices where you're currently logged in.</Small>
      </FlexBetween>

      <Scrollbar autoHide={false}>
        <Table sx={{
        minWidth: 800
      }}>
          <TableHead>
            <TableRow>
              {HEAD_CELLS.map(item => <HeadTableCell key={item}>{item}</HeadTableCell>)}
            </TableRow>
          </TableHead>

          <TableBody>
            {ACTIVITY_LIST.map(item => <BodyTableRow key={item.id}>
                <BodyTableCell>
                  <FlexBox alignItems="center" gap={1}>
                    <Avatar src={item.browserIcon} sx={{
                  width: 20,
                  height: 20
                }} />
                    <Paragraph>{item.browser}</Paragraph>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>{item.device}</BodyTableCell>

                <BodyTableCell>
                  <FlexBox gap={1} alignItems="center">
                    <Paragraph>{item.location}</Paragraph>
                    {item.current && <Chip label="current" size="small" color="success" variant="outlined" />}
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>{item.recentActivity}</BodyTableCell>
              </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
}