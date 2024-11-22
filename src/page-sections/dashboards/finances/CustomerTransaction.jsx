import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton'; // MUI ICON COMPONENTS

import Tune from '@mui/icons-material/Tune';
import Schedule from '@mui/icons-material/Schedule';
import { format } from 'date-fns'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import { Paragraph, Small } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // COMMON DASHBOARD RELATED COMPONENTS

import { BodyTableCell, HeadTableCell } from '../_common'; // CUSTOM DUMMY DATA SET

const DATA = [{
  id: 1,
  total: 356.25,
  createdAt: new Date('August 31, 2022 10:30:00'),
  user: {
    id: 11,
    name: 'Arikunn',
    image: '/static/user/user-13.png'
  }
}, {
  id: 2,
  total: 165.58,
  createdAt: new Date('August 30, 2022 13:30:00'),
  user: {
    id: 21,
    name: 'Ikauwis',
    image: '/static/user/user-14.png'
  }
}, {
  id: 3,
  total: 463.25,
  createdAt: new Date('August 29, 2022 19:30:00'),
  user: {
    id: 31,
    name: 'Dayet',
    image: '/static/user/user-15.png'
  }
}, {
  id: 4,
  total: 185.58,
  createdAt: new Date('August 28, 2022 16:30:00'),
  user: {
    id: 41,
    name: 'Ikauwis',
    image: '/static/user/user-13.png'
  }
}];
export default function CustomerTransaction() {
  const getColor = index => {
    return index % 2 === 1 ? 'action.selected' : 'transparent';
  };

  return <Card>
      <FlexBetween p={3}>
        <Paragraph fontSize={18} fontWeight={500}>
          Customer Transactions
        </Paragraph>

        <FlexBox gap={1}>
          <Paragraph lineHeight={1} sx={{
          gap: 1,
          display: 'flex',
          borderRadius: 1.5,
          color: 'grey.500',
          alignItems: 'center',
          padding: '.25rem .5rem',
          backgroundColor: 'action.selected'
        }}>
            <Schedule fontSize="small" /> 24 Aug - 31 Aug
          </Paragraph>

          <IconButton color="secondary">
            <Tune />
          </IconButton>
        </FlexBox>
      </FlexBetween>

      <Scrollbar>
        <Table sx={{
        minWidth: 500
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>TRANSACTION</HeadTableCell>
              <HeadTableCell>DATE</HeadTableCell>
              <HeadTableCell>TIME</HeadTableCell>
              <HeadTableCell>AMOUNT</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {DATA.map((item, index) => <TableRow key={index} sx={{
            backgroundColor: getColor(index)
          }}>
                <BodyTableCell>
                  <FlexBox gap={1}>
                    <Avatar variant="rounded" src={item.user.image} />
                    <div>
                      <Paragraph color="text.primary" fontWeight={500}>
                        {item.user.name}
                      </Paragraph>
                      <Small>{item.user.id}</Small>
                    </div>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>{format(new Date(item.createdAt), 'dd MMM, yyyy')}</BodyTableCell>
                <BodyTableCell>{format(new Date(item.createdAt), 'hh:mm a')}</BodyTableCell>

                <BodyTableCell>
                  <Paragraph color="text.primary" fontWeight={500}>
                    ${item.total}
                  </Paragraph>
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
}