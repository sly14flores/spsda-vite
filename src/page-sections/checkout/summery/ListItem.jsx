// CUSTOM COMPONENTS
import { Paragraph } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween'; // ==============================================================

// ==============================================================
export default function ListItem({
  title,
  value
}) {
  return <FlexBetween>
      <Paragraph fontSize={16} fontWeight={500} color="text.secondary">
        {title}
      </Paragraph>

      {typeof value === 'string' ? <Paragraph fontSize={16} fontWeight={500}>
          {value}
        </Paragraph> : value}
    </FlexBetween>;
}