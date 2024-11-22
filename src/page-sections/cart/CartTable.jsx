import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import Counter from '@/components/counter';
import Scrollbar from '@/components/scrollbar';
import FlexBox from '@/components/flexbox/FlexBox';
import { H6, Paragraph, Span } from '@/components/typography'; // CUSTOM ICON COMPONENTS

import Clear from '@/icons/Clear'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENTS

const StyledTableHead = styled(TableHead)(({
  theme
}) => ({
  backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100]
}));
const HeadTableCell = styled(TableCell)({
  padding: '10px 16px',
  '&:first-of-type': {
    paddingLeft: 24
  },
  '&:last-of-type': {
    paddingRight: 24
  }
});
const BodyTableCell = styled(HeadTableCell)({
  padding: '24px 16px',
  ':nth-of-type(1)': {
    minWidth: 250
  },
  ':nth-of-type(2)': {
    minWidth: 120
  }
});
export default function CartTable() {
  return <Card>
      <H6 fontSize={16} p={3}>
        Cart{' '}
        <Span color="text.secondary" fontSize={14} fontWeight={400}>
          (3 item)
        </Span>
      </H6>

      <Scrollbar autoHide={false}>
        <Table sx={{
        minWidth: 600
      }}>
          <StyledTableHead>
            <TableRow>
              <HeadTableCell>Product</HeadTableCell>
              <HeadTableCell>Quantity</HeadTableCell>
              <HeadTableCell>Price</HeadTableCell>
              <HeadTableCell>Action</HeadTableCell>
            </TableRow>
          </StyledTableHead>

          <TableBody>
            {[1, 2, 3].map(item => <TableRow key={item}>
                <BodyTableCell>
                  <FlexBox gap={1.5} alignItems="center">
                    <Avatar src="/static/products/shoe-2.png" sx={{
                  width: 65,
                  height: 65,
                  borderRadius: '10%'
                }} />

                    <Stack spacing={0.3}>
                      <H6 color="text.primary" fontSize={16}>
                        Nike Air Jordan
                      </H6>

                      <Paragraph>
                        Color: <Span color="text.primary">White</Span>
                      </Paragraph>

                      <Paragraph>
                        Size: <Span color="text.primary">09</Span>
                      </Paragraph>
                    </Stack>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>
                  <Counter />
                  <Paragraph mt={0.5}>Available: 12</Paragraph>
                </BodyTableCell>

                <BodyTableCell>
                  <Paragraph color="text.primary">$230</Paragraph>
                </BodyTableCell>

                <BodyTableCell>
                  <IconButton>
                    <Clear sx={{
                  color: 'text.secondary'
                }} />
                  </IconButton>
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
}