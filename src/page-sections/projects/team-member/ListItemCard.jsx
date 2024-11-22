import Box from '@mui/material/Box'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { H6, Paragraph } from '@/components/typography'; // ==============================================================

// ==============================================================
export default function ListItemCard({
  item
}) {
  return <FlexBox alignItems="center" gap="1rem">
      <Box width={36} height={36}>
        <img src={item.image} alt="Logo" width="100%" />
      </Box>

      <div>
        <H6 fontSize={14}>{item.company}</H6>
        <Paragraph fontSize={12} lineHeight={1.8} color="text.secondary">
          {item.position}
        </Paragraph>
      </div>
    </FlexBox>;
}