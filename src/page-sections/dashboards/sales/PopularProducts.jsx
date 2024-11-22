import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import styled from '@mui/material/styles/styled';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import FlexBox from '@/components/flexbox/FlexBox';
import { H6, Paragraph } from '@/components/typography'; // CUSTOM DATA

import { PRODUCTS } from '@/__fakeData__/dashboards/sales'; // STYLED COMPONENTS

const HeadCell = styled(TableCell)(({
  theme
}) => ({
  fontWeight: 500,
  paddingBottom: '.5rem',
  color: theme.palette.text.secondary,
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:first-of-type': {
    paddingLeft: '1.5rem'
  }
}));
const BodyCell = styled(TableCell)(() => ({
  paddingBlock: '.75rem',
  '&:first-of-type': {
    paddingLeft: '1.5rem'
  }
}));
const BodyTableRow = styled(TableRow)(({
  theme
}) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:last-of-type': {
    borderBottom: 'none'
  },
  transition: theme.transitions.create('all', {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.easeInOut
  }),
  ':hover': {
    backgroundColor: theme.palette.action.hover
  }
}));
export default function PopularProducts() {
  const {
    t
  } = useTranslation();
  return <Card>
      <H6 fontSize={14} mx={3} mt={3} mb={2}>
        {t('Popular Products')}
      </H6>

      <Scrollbar>
        <Table sx={{
        minWidth: 700
      }}>
          <TableHead>
            <TableRow>
              <HeadCell>Product</HeadCell>
              <HeadCell>Date</HeadCell>
              <HeadCell>Category</HeadCell>
              <HeadCell>Brand</HeadCell>
              <HeadCell>Price</HeadCell>
              <HeadCell align="center">Status</HeadCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {PRODUCTS.map(item => <BodyTableRow key={item.id}>
                <BodyCell>
                  <FlexBox alignItems="center" gap={2}>
                    <Avatar src={item.image} alt={item.name} variant="rounded" />
                    <Paragraph color="text.primary" fontWeight={500}>
                      {item.name}
                    </Paragraph>
                  </FlexBox>
                </BodyCell>

                <BodyCell>{format(item.date, 'MMM dd, yyyy')}</BodyCell>
                <BodyCell>{item.category}</BodyCell>
                <BodyCell>{item.brand}</BodyCell>
                <BodyCell>${item.price}</BodyCell>

                <BodyCell align="center">
                  <Chip size="small" label={item.status} color={item.status === 'Available' ? 'success' : 'error'} />
                </BodyCell>
              </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
}