import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton'; // GLOBAL CUSTOM HOOK

import useCopyToClipboard from '@/hooks/useCopyToClipboard'; // MUI ICON COMPONENTS

import Info from '@mui/icons-material/Info';
import ContentCopy from '@mui/icons-material/ContentCopy'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { H5, H6, Paragraph } from '@/components/typography'; // COMMON STYLED COMPONENTS

import { BodyTableCellV2, BodyTableRow, HeadTableCell } from '../styles'; // CUSTOM UTILS METHOD

import { currency } from '@/utils/currency'; // CUSTOM DUMMY DATA SET

import { REFER_LIST, EARNING_LIST } from './data'; // STYLED COMPONENT

import { EarningBox, StyledInputBase } from './styles';
export default function Referrals() {
  const referLink = 'https://Example.com/reffer/?refid=345re66787k8';
  const {
    handleCopy
  } = useCopyToClipboard();
  return <Card sx={{
    pb: 2
  }}>
      <H6 fontSize={14} padding={3}>
        Referrals
      </H6>

      <Divider />

      <Box padding={3}>
        {
        /* DATA VISUALIZATION */
      }
        <Grid container spacing={3} mb={3}>
          {EARNING_LIST.map(({
          Icon,
          amount,
          iconColor,
          id,
          name
        }) => <Grid size={{
          md: 3,
          sm: 6,
          xs: 12
        }} key={id}>
              <EarningBox key={id}>
                <Icon color={iconColor} />
                <H5 fontSize={14} my={0.5}>
                  {currency(amount)}
                </H5>

                <Paragraph color="text.secondary">{name}</Paragraph>
              </EarningBox>
            </Grid>)}
        </Grid>

        {
        /* ALERT AREA SECTION */
      }
        <Alert severity="info" variant="outlined" icon={<Info />} action={<Button>Withdraw $44,550</Button>}>
          <AlertTitle>We Need Your Attention</AlertTitle>
          Writing headlines for blog posts is as much an art as it is a science, and warrants its
          own post, but for now, all I’d advise is experimenting what works for your audience,
          especially if it’s not resonating with your audience
        </Alert>

        {
        /* REFERRAL LINK COPY CLIPBOARD */
      }
        <Box py={3}>
          <Grid container spacing={2}>
            <Grid size={{
            md: 6,
            xs: 12
          }}>
              <H5 fontSize={14} mb={0.5}>
                Your Referral Link
              </H5>

              <Paragraph>
                Plan your blog post by choosing a topic, creating an outline conduct research, and
                checking facts
              </Paragraph>
            </Grid>

            <Grid size={{
            md: 6,
            xs: 12
          }}>
              <StyledInputBase disabled fullWidth value={referLink} endAdornment={<IconButton onClick={() => handleCopy(referLink)}>
                    <ContentCopy fontSize="small" />
                  </IconButton>} />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {
      /* REFFED USERS TABLE */
    }
      <FlexBetween px={3} pb={2}>
        <H5 fontSize={14}>Referred Users</H5>

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
          <TableHead sx={{
          backgroundColor: 'divider'
        }}>
            <TableRow>
              <HeadTableCell>Order ID</HeadTableCell>
              <HeadTableCell>User</HeadTableCell>
              <HeadTableCell>Date</HeadTableCell>
              <HeadTableCell>Bonus</HeadTableCell>
              <HeadTableCell>Profit</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {REFER_LIST.map(item => <BodyTableRow key={item.orderId}>
                <BodyTableCellV2>{item.orderId}</BodyTableCellV2>
                <BodyTableCellV2>{item.user}</BodyTableCellV2>
                <BodyTableCellV2>{item.date}</BodyTableCellV2>
                <BodyTableCellV2>{item.bonus}%</BodyTableCellV2>
                <BodyTableCellV2 sx={{
              color: 'success.main'
            }}>
                  {currency(item.profit)}
                </BodyTableCellV2>
              </BodyTableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
}