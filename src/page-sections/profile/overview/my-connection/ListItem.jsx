import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar'; // CUSTOM COMPONENTS

import { H6, Small } from '@/components/typography'; // =======================================================================================

// =======================================================================================
export default function ListItem({
  name,
  imageUrl,
  position
}) {
  return <Stack direction="row" alignItems="center" spacing={1}>
      <Avatar src={imageUrl} />

      <Stack spacing={0.5}>
        <H6 fontSize={14}>{name}</H6>
        <Small color="text.secondary" lineHeight={1} fontWeight={500}>
          {position}
        </Small>
      </Stack>
    </Stack>;
}