import MoreHoriz from '@mui/icons-material/MoreHoriz'; // MUI

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/system/colorManipulator'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import FlexBox from '@/components/flexbox/FlexBox';
import { H6, Paragraph } from '@/components/typography'; // STYLED COMPONENTS

const HeadTableCell = styled(TableCell)(({
  theme
}) => ({
  fontWeight: 500,
  paddingBottom: 8,
  color: theme.palette.text.primary,
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  '&:last-of-type': {
    textAlign: 'right'
  }
}));
const BodyTableCell = styled(TableCell)(() => ({
  fontWeight: 500,
  padding: '0.5rem 0',
  '&:first-of-type': {
    minWidth: 220
  },
  '&:nth-of-type(2)': {
    minWidth: 140
  },
  '&:last-of-type': {
    textAlign: 'right'
  }
}));
export default function CustomerList() {
  const LIST = [{
    id: 1,
    role: 'UI Designer',
    name: 'Natalie Dormer',
    email: 'Uilib@gmail.com',
    username: 'natalie-dormer',
    avatar: '/static/user/user-11.png'
  }, {
    id: 2,
    role: 'Developer',
    name: 'Steven Smith',
    email: 'Uilib@gmail.com',
    username: 'steven-smith',
    avatar: '/static/user/user-10.png'
  }, {
    id: 3,
    role: 'UI Designer',
    name: 'Lily Collins',
    email: 'Uilib@gmail.com',
    username: 'lily-collins',
    avatar: '/static/user/user-16.png'
  }];
  return <Card className="p-3 h-full">
      <H6 mb={3} fontSize={14}>
        Customer List
      </H6>

      <Scrollbar autoHide={false}>
        <Table>
          <TableHead>
            <TableRow>
              <HeadTableCell>Name</HeadTableCell>
              <HeadTableCell>Username</HeadTableCell>
              <HeadTableCell>Email</HeadTableCell>
              <HeadTableCell>Role</HeadTableCell>
              <HeadTableCell>Actions</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {LIST.map(({
            id,
            avatar,
            email,
            name,
            role,
            username
          }) => <TableRow key={id}>
                <BodyTableCell>
                  <FlexBox alignItems="center" gap={1}>
                    <Avatar src={avatar} alt="user" />
                    <Paragraph color="text.primary" fontWeight={500}>
                      {name}
                    </Paragraph>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>{username}</BodyTableCell>
                <BodyTableCell>{email}</BodyTableCell>
                <BodyTableCell>{role}</BodyTableCell>

                <BodyTableCell>
                  <IconButton>
                    <MoreHoriz fontSize="small" />
                  </IconButton>
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
}