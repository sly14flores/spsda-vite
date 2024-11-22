import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import GppGoodOutlined from '@mui/icons-material/GppGoodOutlined'; // CUSTOM COMPONENTS

import ListItem from './ListItem';
import { H6, Paragraph } from '@/components/typography'; // STYLED COMPONENTS

import { StyledParagraph, StyledRoot } from './styles';
export default function Summery() {
  return <StyledRoot>
      <H6 fontSize={24} mb={2.5}>
        Summary
      </H6>

      <Stack spacing={1.7} mb={3}>
        <ListItem title="Subscription" value={<Chip label="Starter" />} />
        <ListItem title="Billed in month" value="$14.00" />

        <Divider />

        <ListItem title="Total Bill" value="$14.00" />
        <ListItem title="Taxes" value="$1.00" />

        <Divider />

        <ListItem title="Total Billed" value={<Paragraph fontSize={24} fontWeight={600}>
              $15.00
            </Paragraph>} />
      </Stack>

      <Button fullWidth>Upgrade Plan</Button>

      <StyledParagraph>
        <GppGoodOutlined className="icon" /> Secure credit card payment
      </StyledParagraph>

      <Paragraph textAlign="center" color="text.secondary">
        This is a secure encrypted payment
      </Paragraph>
    </StyledRoot>;
}