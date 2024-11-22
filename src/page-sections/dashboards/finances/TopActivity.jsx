import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import MoreButton from '@/components/more-button';
import { Paragraph, Small } from '@/components/typography';
import { FlexBetween, FlexRowAlign } from '@/components/flexbox'; // CUSTOM UTILS METHODS

import { currency } from '@/utils/currency';
import { isDark } from '@/utils/constants'; // STYLED COMPONENTS

const AsiaBox = styled(FlexRowAlign)(({
  theme
}) => ({
  width: 180,
  height: 180,
  color: 'white',
  margin: 'auto',
  borderRadius: '50%',
  position: 'relative',
  flexDirection: 'column',
  border: '1.5px solid white',
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.primary.main
}));
const EuropeBox = styled(FlexRowAlign)(({
  theme
}) => ({
  width: 120,
  height: 120,
  top: '60%',
  right: '60%',
  borderRadius: '50%',
  position: 'absolute',
  flexDirection: 'column',
  border: '1.5px solid white',
  boxShadow: theme.shadows[1],
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.grey[isDark(theme) ? 500 : 200]
}));
const AfricaBox = styled(FlexRowAlign)(({
  theme
}) => ({
  width: 90,
  height: 90,
  top: '90%',
  borderRadius: '50%',
  position: 'absolute',
  flexDirection: 'column',
  border: '1.5px solid white',
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.grey[700]
}));
export default function TopActivity() {
  return <Card sx={{
    p: 3,
    minHeight: 370,
    height: '100%'
  }}>
      <FlexBetween>
        <Paragraph fontSize={18} fontWeight={500}>
          Top Activity
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Box pl={3} width="100%" mt={3}>
        <AsiaBox>
          <Paragraph fontSize={16} fontWeight={500}>
            {currency(1725258.69)}
          </Paragraph>
          <Small>Asia</Small>

          <EuropeBox>
            <Paragraph fontSize={16} fontWeight={500}>
              {currency(2525.25)}
            </Paragraph>
            <Small>Europe</Small>
          </EuropeBox>

          <AfricaBox>
            <Paragraph fontSize={16} fontWeight={500}>
              {currency(525)}
            </Paragraph>
            <Small>Africa</Small>
          </AfricaBox>
        </AsiaBox>
      </Box>
    </Card>;
}