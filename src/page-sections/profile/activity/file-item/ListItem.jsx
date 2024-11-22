import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'; // CUSTOM COMPONENTS

import { Paragraph, Small } from '@/components/typography'; // ===================================================================================

// ===================================================================================
export default function ListItem({
  title,
  icon,
  size
}) {
  return <Stack direction="row" alignItems="center" spacing={1} mr={6}>
      <Box width={40} flexShrink={0} display="flex">
        <img src={icon} width="100%" alt={title} />
      </Box>

      <div>
        <Paragraph lineHeight={1} fontWeight={500} color="primary.main">
          {title}
        </Paragraph>

        <Small color="grey.500">{size} mb</Small>
      </div>
    </Stack>;
}