import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import { nanoid } from 'nanoid'; // CUSTOM COMPONENTS

import ListItem from './shared/ListItem';
import MoreButton from '@/components/more-button';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { Paragraph } from '@/components/typography'; // CUSTOM ICON COMPONENTS

import Health from '@/icons/Health';
import Emergency from '@/icons/Emergency';
import Investment from '@/icons/Investment';
import EducationTwo from '@/icons/EducationTwo'; // CUSTOM UTILS METHOD

import { currency } from '@/utils/currency'; // CUSTOM DUMMY DATA

const DATA = [{
  id: nanoid(),
  amount: 23560,
  Icon: Emergency,
  title: 'Emergency',
  color: 'primary.main'
}, {
  id: nanoid(),
  amount: 19489,
  Icon: Health,
  title: 'Health',
  color: 'success.500'
}, {
  id: nanoid(),
  amount: 18889,
  Icon: Investment,
  title: 'Investment',
  color: 'error.main'
}, {
  id: nanoid(),
  amount: 21489,
  Icon: EducationTwo,
  title: 'Education',
  color: 'warning.main'
}];
export default function MySavings() {
  return <Card className="p-3">
      <FlexBetween mb={4}>
        <Paragraph fontSize={18} fontWeight={500}>
          My Savings
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Stack spacing={1.5}>
        {DATA.map(({
        id,
        amount,
        Icon,
        title,
        color
      }) => <FlexBetween key={id}>
            <ListItem subTitle={title} Icon={<Icon sx={{
          color
        }} />} title={currency(amount)} titleStyle={{
          fontSize: 18,
          lineHeight: 1.5
        }} iconStyle={{
          width: 48,
          height: 48,
          borderRadius: 3
        }} />

            <IconButton>
              <KeyboardArrowRightRounded sx={{
            color: 'grey.400'
          }} />
            </IconButton>
          </FlexBetween>)}
      </Stack>
    </Card>;
}