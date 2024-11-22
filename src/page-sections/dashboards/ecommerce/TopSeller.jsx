import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { nanoid } from 'nanoid'; // CUSTOM COMPONENTS

import MoreButton from '@/components/more-button';
import { Paragraph, Small } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM UTILS METHODS

import { currency, format } from '@/utils/currency'; // CUSTOM DUMMY DATA

const DATA = [{
  id: nanoid(),
  totalSold: 13440,
  totalAmount: 350000,
  country: '/static/flags/usa-round.png',
  user: {
    name: 'Gage Paquette',
    image: '/static/user/user-11.png'
  }
}, {
  id: nanoid(),
  totalSold: 10240,
  totalAmount: 148000,
  country: '/static/flags/uk-round.png',
  user: {
    name: 'Lara Harvey',
    image: '/static/user/user-16.png'
  }
}, {
  id: nanoid(),
  totalSold: 10240,
  totalAmount: 148000,
  country: '/static/flags/germany-round.png',
  user: {
    name: 'Evan Scott',
    image: '/static/user/user-17.png'
  }
}, {
  id: nanoid(),
  totalSold: 10240,
  totalAmount: 148000,
  country: '/static/flags/spain-round.png',
  user: {
    name: 'Benja Johnston',
    image: '/static/user/user-18.png'
  }
}];
export default function TopSeller() {
  return <Card className="p-3 h-full">
      <FlexBetween>
        <Paragraph fontSize={18} fontWeight={500}>
          Top Seller
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <FlexBetween mt={3} mb={2}>
        <Paragraph color="text.secondary" fontWeight={500}>
          Profile
        </Paragraph>
        <Paragraph color="text.secondary" fontWeight={500}>
          Items sold
        </Paragraph>
      </FlexBetween>

      <Stack spacing={2.5}>
        {DATA.map(item => <FlexBetween key={item.id}>
            <FlexBox gap={1.5} alignItems="center">
              <Badge overlap="circular" anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }} badgeContent={<Avatar alt="Remy Sharp" src={item.country} sx={{
            all: 'unset',
            width: 17,
            height: 17
          }} />}>
                <Avatar alt={item.user.name} src={item.user.image} sx={{
              width: 45,
              height: 45
            }} />
              </Badge>

              <div>
                <Paragraph lineHeight={1} fontWeight={600}>
                  {item.user.name}
                </Paragraph>
                <Small fontWeight={500} color="text.secondary">
                  {currency(item.totalAmount)}
                </Small>
              </div>
            </FlexBox>

            <Paragraph fontWeight={500} color="text.secondary">
              {format(item.totalSold)}
            </Paragraph>
          </FlexBetween>)}
      </Stack>
    </Card>;
}