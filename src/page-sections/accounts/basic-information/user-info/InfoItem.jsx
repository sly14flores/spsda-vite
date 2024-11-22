// CUSTOM COMPONENTS
import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph } from '@/components/typography'; // ==============================================================

// ==============================================================
export default function InfoItem({
  title,
  Icon
}) {
  return <FlexBox alignItems="center" gap={1} color="grey.500">
      <Icon sx={{
      fontSize: 18
    }} />
      <Paragraph>{title}</Paragraph>
    </FlexBox>;
}