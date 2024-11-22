import MoreHoriz from '@mui/icons-material/MoreHoriz'; // MUI

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import AvatarGroup from '@mui/material/AvatarGroup';
import { alpha } from '@mui/system/colorManipulator';
import useTheme from '@mui/material/styles/useTheme';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import { H6, Paragraph } from '@/components/typography';
import { FlexBox, FlexRowAlign } from '@/components/flexbox'; // STYLED COMPONENTS

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
    textAlign: 'right',
    padding: 0
  }
}));
const StyledAvatarGroup = styled(AvatarGroup)(() => ({
  justifyContent: 'flex-end',
  '& .MuiAvatarGroup-avatar': {
    width: 30,
    height: 30,
    fontSize: 12
  }
}));
export default function JobList() {
  const theme = useTheme();
  const list = [{
    id: 1,
    date: '01/10/2021',
    posts: 'Senior Fullstack Engineer',
    color: theme.palette.primary.main
  }, {
    id: 2,
    date: '01/09/2021',
    posts: 'Freelance Java Developer',
    color: theme.palette.info.main
  }, {
    id: 3,
    date: '11/10/2021',
    posts: 'Python Developer',
    color: theme.palette.warning.main
  }, {
    id: 4,
    date: '01/10/2021',
    posts: 'UI/UX Designer',
    color: theme.palette.error.main
  }];
  return <Card className="p-3 h-full">
      <H6 mb={2} fontSize={14}>
        Job List
      </H6>

      <Scrollbar autoHide={false}>
        <Table>
          <TableHead>
            <TableRow>
              <HeadTableCell>Posts</HeadTableCell>
              <HeadTableCell>Posted At</HeadTableCell>
              <HeadTableCell>Applicants</HeadTableCell>
              <HeadTableCell>Actions</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {list.map(item => <TableRow key={item.id}>
                <BodyTableCell>
                  <FlexBox gap={1}>
                    <FlexRowAlign width={16} height={16} borderRadius="50%" bgcolor={alpha(item.color, 0.2)}>
                      <Box width={7} height={7} borderRadius="50%" bgcolor={item.color} />
                    </FlexRowAlign>

                    <Paragraph color="text.primary" fontWeight={500}>
                      {item.posts}
                    </Paragraph>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>{item.date}</BodyTableCell>

                <BodyTableCell>
                  <StyledAvatarGroup max={4}>
                    <Avatar src="/static/user/user-11.png" />
                    <Avatar src="/static/user/user-10.png" />
                    <Avatar src="/static/user/user-16.png" />
                    <Avatar src="/static/user/user-17.png" />
                    <Avatar src="/static/avatar/003-boy.svg" />
                  </StyledAvatarGroup>
                </BodyTableCell>

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