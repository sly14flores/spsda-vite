import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search';
import { nanoid } from 'nanoid'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import MoreButton from '@/components/more-button';
import { Paragraph, Small } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM UTILS METHODS

import { currency, format } from '@/utils/currency'; // COMMON DASHBOARD RELATED COMPONENT

import { BodyTableCell, HeadTableCell } from '../_common'; // CUSTOM DUMMY DATA SET

const DATA = [{
  id: nanoid(),
  price: 1799,
  sales: 17689,
  totalSold: 2389,
  title: 'Apple Watch',
  image: '/static/products/apple-watch.png'
}, {
  id: nanoid(),
  price: 739,
  sales: 62397,
  totalSold: 6698,
  title: 'Nike Shoes',
  image: '/static/products/shoe-1.png'
}, {
  id: nanoid(),
  price: 245,
  sales: 7658,
  totalSold: 300,
  title: 'Ribbon Glass',
  image: '/static/products/sunglass.png'
}, {
  id: nanoid(),
  price: 139,
  sales: 6658,
  totalSold: 2389,
  title: 'Apple Watch',
  image: '/static/products/headset.png'
}];
export default function TopProducts() {
  return <Card>
      <FlexBetween p={3}>
        <Paragraph fontSize={18} fontWeight={500}>
          Top Products
        </Paragraph>

        <FlexBox gap={1} alignItems="center">
          <TextField placeholder="Search products..." slotProps={{
          input: {
            startAdornment: <Search />
          }
        }} />
          <MoreButton />
        </FlexBox>
      </FlexBetween>

      <Scrollbar>
        <Table sx={{
        minWidth: 500
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>PRODUCT NAME</HeadTableCell>
              <HeadTableCell>PRICE</HeadTableCell>
              <HeadTableCell align="center">SOLD</HeadTableCell>
              <HeadTableCell align="center">SALES</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {DATA.map((item, index) => <TableRow key={index}>
                <BodyTableCell>
                  <FlexBox gap={1}>
                    <Avatar variant="rounded" src={item.image} />
                    <div>
                      <Paragraph color="text.primary" fontWeight={500}>
                        {item.title}
                      </Paragraph>
                      <Small>#{item.id.substring(0, 6)}</Small>
                    </div>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>{currency(item.price)}</BodyTableCell>
                <BodyTableCell align="center">{format(item.totalSold)} pcs</BodyTableCell>

                <BodyTableCell align="center">
                  <Paragraph color="text.primary" fontWeight={500}>
                    {currency(item.sales)}
                  </Paragraph>
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
}