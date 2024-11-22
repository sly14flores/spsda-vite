import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar'; // CUSTOM COMPONENTS

import ItemLayout from './ItemLayout';
import { H6, Small, Span } from '@/components/typography'; // CUSTOM ICON COMPONENT

import Layers from '@/icons/Layers';
export default function LayerItem() {
  return <ItemLayout Icon={<Layers sx={{
    fontSize: 16
  }} />}>
      <H6 fontSize={14} mb={0.5}>
        Task <Span color="primary.main">#45890</Span> merged with{' '}
        <Span color="primary.main">#45890</Span> in “Ads Pro Admin Dashboard project:
      </H6>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Small color="text.secondary">Added at 4.23 PM by</Small>
        <Avatar src="/static/user/user-11.png" sx={{
        width: 17,
        height: 17
      }} />
      </Stack>
    </ItemLayout>;
}