import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton'; // MUI ICON COMPONENT

import MoreHoriz from '@mui/icons-material/MoreHoriz'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph } from '@/components/typography'; // ==============================================================

// ==============================================================
export default function TodoItem({
  date,
  title
}) {
  return <FlexBox justifyContent="space-between" alignItems="center">
      <FlexBox alignItems="center" gap={2}>
        <Avatar>{title[0]}</Avatar>

        <div>
          <Paragraph fontWeight={500}>{title}</Paragraph>
          <Paragraph fontSize={12} color="text.secondary">
            {date}
          </Paragraph>
        </div>
      </FlexBox>

      <IconButton>
        <MoreHoriz fontSize="small" />
      </IconButton>
    </FlexBox>;
}