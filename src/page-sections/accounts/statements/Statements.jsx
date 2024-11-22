import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { H6, Paragraph, Span } from '@/components/typography'; // CUSTOM ICON COMPONENTS

import DownloadTo from '@/icons/DownloadTo'; // CUSTOM UTILS METHOD

import { currency } from '@/utils/currency'; // COMMON STYLED COMPONENTS

import { BodyTableRow } from '../styles'; // STYLED COMPONENTS

import { EarningBox, StyledStack, BodyTableCell, EarningBoxWrapper, StyledHeadTableCell } from './styles'; // CUSTOM DUMMY DATA SET

import { EARNING_LIST } from './data';
export default function Statements() {
  return <Card sx={{
    pb: 2
  }}>
      <H6 fontSize={14} padding={3}>
        Earnings
      </H6>

      <Divider />

      <Box padding={3}>
        <Paragraph color="grey.500">
          Last <Span color="primary.main">15</Span> day earnings calculated
        </Paragraph>

        <EarningBoxWrapper flexWrap="wrap" pt={2}>
          <StyledStack direction="row" flexWrap="wrap" spacing={2}>
            {EARNING_LIST.map(({
            id,
            Icon,
            amount,
            iconColor,
            name
          }) => <EarningBox key={id}>
                <Icon sx={{
              color: iconColor
            }} />

                <H6 fontSize={14} my={0.5}>
                  {currency(amount)}
                </H6>

                <Paragraph color="text.secondary">{name}</Paragraph>
              </EarningBox>)}
          </StyledStack>

          <Button variant="contained">Withdraw $4,550</Button>
        </EarningBoxWrapper>
      </Box>

      <FlexBetween px={3} py={2}>
        <H6 fontSize={14}>Statement</H6>

        <Select defaultValue={2022} size="small">
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
        </Select>
      </FlexBetween>

      <Scrollbar autoHide={false}>
        <Table sx={{
        minWidth: 800
      }}>
          <TableHead>
            <TableRow>
              <StyledHeadTableCell>Date</StyledHeadTableCell>
              <StyledHeadTableCell>Order ID</StyledHeadTableCell>
              <StyledHeadTableCell>Order Details</StyledHeadTableCell>
              <StyledHeadTableCell>Amount</StyledHeadTableCell>
              <StyledHeadTableCell>Invoice</StyledHeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {[1, 2, 3, 4, 5, 6].map(item => <BodyTableRow key={item}>
                <BodyTableCell>Nov 12, 2021</BodyTableCell>
                <BodyTableCell>202745788</BodyTableCell>
                <BodyTableCell>The Icon of full icon set</BodyTableCell>
                <BodyTableCell>$650</BodyTableCell>

                <BodyTableCell>
                  <Button size="small" variant="contained" disabled={item === 1} startIcon={<DownloadTo />}>
                    Download
                  </Button>
                </BodyTableCell>
              </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
}