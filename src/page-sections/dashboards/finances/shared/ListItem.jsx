import useTheme from '@mui/material/styles/useTheme';
// CUSTOM COMPONENTS
import { Paragraph } from '@/components/typography';
import { FlexBox, FlexRowAlign } from '@/components/flexbox'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // =========================================================================

// =========================================================================
export default function ListItem({
  Icon,
  title,
  subTitle,
  iconStyle = {},
  titleStyle = {}
}) {
  const theme = useTheme();
  const BG_COLOR = isDark(theme) ? 'grey.700' : 'grey.50';
  return <FlexBox alignItems="center" gap={1.5}>
      <FlexRowAlign width={40} height={40} borderRadius={2} bgcolor={BG_COLOR} sx={iconStyle}>
        {Icon}
      </FlexRowAlign>

      <div>
        <Paragraph lineHeight={1} fontSize={16} fontWeight={600} sx={titleStyle}>
          {title}
        </Paragraph>

        {subTitle && <Paragraph color="text.secondary">{subTitle}</Paragraph>}
      </div>
    </FlexBox>;
}