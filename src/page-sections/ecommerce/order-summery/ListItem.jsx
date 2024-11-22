import { Paragraph } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween'; // ==============================================================

// ==============================================================
export default function ListItem({
  title,
  value,
  valueColor
}) {
  return <FlexBetween>
      <Paragraph>{title}</Paragraph>
      <Paragraph color={valueColor}>${value}</Paragraph>
    </FlexBetween>;
}