import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import { Paragraph } from '@/components/typography'; // CUSTOM ICON COMPONENTS

import Edit from '@/icons/Edit';
import Delete from '@/icons/Delete';
import HomeOutlined from '@/icons/HomeOutlined'; // CUSTOM STYLED COMPONENTS

const StyledRoot = styled(Card)(({
  theme
}) => ({
  padding: '1rem',
  display: 'flex',
  boxShadow: 'none',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: `1px solid ${theme.palette.divider}`
}));
export default function BillingAddressListItem() {
  return <StyledRoot>
      <Box maxWidth="60%">
        <Stack direction="row" alignItems="center" spacing={1}>
          <HomeOutlined sx={{
          color: 'grey.400'
        }} />
          <Paragraph fontWeight={500}>Home</Paragraph>
        </Stack>

        <Paragraph mt={1} color="grey.500">
          Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 US
        </Paragraph>
      </Box>

      <Stack direction="row">
        <IconButton>
          <Edit fontSize="small" sx={{
          color: 'text.secondary'
        }} />
        </IconButton>

        <IconButton>
          <Delete fontSize="small" sx={{
          color: 'text.secondary'
        }} />
        </IconButton>
      </Stack>
    </StyledRoot>;
}