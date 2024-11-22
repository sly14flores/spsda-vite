import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { nanoid } from 'nanoid'; // CUSTOM COMPONENTS

import MoreButton from '@/components/more-button';
import { Paragraph, Small } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM UTILS METHOD

import { currency } from '@/utils/currency'; // CUSTOM DUMMY DATA

const DATA = [{
  id: nanoid(),
  dealWon: 25000,
  balance: 25360.0,
  owner: {
    name: 'Astole Banne',
    image: '/static/user/user-11.png'
  }
}, {
  id: nanoid(),
  dealWon: 25000,
  balance: 25360.0,
  owner: {
    name: 'Jhone Abela',
    image: '/static/user/user-16.png'
  }
}, {
  id: nanoid(),
  dealWon: 25000,
  balance: 25360.0,
  owner: {
    name: 'Lisa Been',
    image: '/static/user/user-17.png'
  }
}];
export default function DealForecast() {
  return <Card className="p-3 h-full">
      <FlexBetween>
        <Paragraph ellipsis fontSize={18} fontWeight={500}>
          Deal Forecast by Owner
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <FlexBetween mt={3} mb={2}>
        <Paragraph color="text.secondary" fontWeight={500}>
          Owner
        </Paragraph>

        <Paragraph color="text.secondary" fontWeight={500}>
          Deal Won
        </Paragraph>
      </FlexBetween>

      <Stack spacing={2.5}>
        {DATA.map(({
        balance,
        dealWon,
        id,
        owner
      }) => <FlexBetween key={id}>
            <FlexBox gap={1.5}>
              <Avatar alt={owner.name} src={owner.image} sx={{
            width: 35,
            height: 35
          }} />

              <div>
                <Paragraph lineHeight={1} fontWeight={600}>
                  {owner.name}
                </Paragraph>

                <Small fontWeight={500} color="text.secondary">
                  {currency(balance)}
                </Small>
              </div>
            </FlexBox>

            <Paragraph fontWeight={500} color="text.secondary">
              {currency(dealWon)}
            </Paragraph>
          </FlexBetween>)}
      </Stack>
    </Card>;
}