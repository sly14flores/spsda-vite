// CUSTOM COMPONENT
import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph } from '@/components/typography'; // ============================================================================================

// ============================================================================================
export default function ListItem({
  title,
  Icon
}) {
  return <FlexBox gap={1} alignItems="center">
      <Icon sx={{
      fontSize: 14,
      color: 'text.secondary'
    }} />
      <Paragraph color="text.secondary">{title}</Paragraph>
    </FlexBox>;
}