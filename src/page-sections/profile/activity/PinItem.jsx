import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar'; // CUSTOM COMPONENTS

import ItemLayout from './ItemLayout';
import { Paragraph, Small } from '@/components/typography'; // CUSTOM ICON COMPONENT

import Pin from '@/icons/Pin';
export default function PinItem() {
  return <ItemLayout Icon={<Pin sx={{
    fontSize: 16
  }} />}>
      <Paragraph fontWeight={600}>
        Invitation for crafting engaging designs that speak human workshop
      </Paragraph>

      <Stack mt={0.5} direction="row" alignItems="center" spacing={1}>
        <Small color="text.secondary">Added at 4.23 PM by</Small>
        <Avatar src="/static/user/user-11.png" sx={{
        width: 17,
        height: 17
      }} />
      </Stack>
    </ItemLayout>;
}