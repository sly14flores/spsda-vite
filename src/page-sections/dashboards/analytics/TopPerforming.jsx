import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import MoreButton from '@/components/more-button';
import { Paragraph, Span } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween'; // CUSTOM UTILS METHOD

import { format } from '@/utils/currency'; // STYLED COMPONENTS

import { HeadTableCell, BodyTableCell } from './styles'; // DUMMY DATA LIST

const DATA = [{
  id: 1,
  page: 'https://onion.com',
  click: 1369,
  views: '50M',
  click2: -165
}, {
  id: 2,
  page: 'https://onion/analytic.com',
  click: 1003,
  views: '28M',
  click2: 528
}, {
  id: 3,
  page: 'https://onion/ecommerce.com',
  click: 1987,
  views: '63M',
  click2: 898
}, {
  id: 4,
  page: 'https://onion/crm.com',
  click: 1462,
  views: '50M',
  click2: -369
}, {
  id: 5,
  page: 'https://onion/finance.com',
  click: 986,
  views: '70M',
  click2: -479
}, {
  id: 6,
  page: 'https://onion/projectm.com',
  click: 1028,
  views: '75M',
  click2: 669
}, {
  id: 7,
  page: 'https://onion/logistics.com',
  click: 369,
  views: '25M',
  click2: 215
}];
export default function TopPerforming() {
  return <Card sx={{
    padding: 3,
    pb: 1
  }}>
      <FlexBetween mb={4}>
        <div>
          <Paragraph fontSize={18} fontWeight={500}>
            Top performing pages
          </Paragraph>
          <Paragraph color="text.secondary">Counted in Millions</Paragraph>
        </div>

        <MoreButton size="small" />
      </FlexBetween>

      <Scrollbar>
        <Table sx={{
        minWidth: 470
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>PAGES</HeadTableCell>
              <HeadTableCell>CLICKS</HeadTableCell>
              <HeadTableCell align="center">VIEWS</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {DATA.map(item => <TableRow key={item.id}>
                <BodyTableCell>{item.page}</BodyTableCell>

                <BodyTableCell>
                  <Paragraph fontWeight={500}>
                    {format(item.click)}{' '}
                    <Span color={item.click2 > 0 ? 'success.main' : 'error.main'} ml={1}>
                      {item.click2 > 0 && '+'}
                      {item.click2}
                    </Span>
                  </Paragraph>
                </BodyTableCell>

                <BodyTableCell align="center">{item.views}</BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
}