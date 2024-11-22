// MUI ICON COMPONENT
import PlaceOutlined from '@mui/icons-material/PlaceOutlined'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph } from '@/components/typography'; // ==============================================================

// ==============================================================
export default function Location({
  country,
  address
}) {
  return <FlexBox gap={1} alignItems="flex-start" color="white">
      <PlaceOutlined sx={{
      color: 'white',
      fontSize: 25
    }} />

      <div>
        <Paragraph lineHeight={1} fontSize={20} fontWeight={600}>
          {country}
        </Paragraph>

        <Paragraph mt={2} fontSize={16}>
          {address}
        </Paragraph>
      </div>
    </FlexBox>;
}