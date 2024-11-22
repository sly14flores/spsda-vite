import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
// CUSTOM COMPONENTS
import { H6, Small } from '@/components/typography'; // ===========================================================================

// ===========================================================================
export default function ListItem({
  title,
  subTitle,
  Icon,
  color
}) {
  return <Stack direction="row" alignItems="center" spacing={1.5}>
      <Stack alignItems="center" justifyContent="center" sx={{
      width: 30,
      height: 30,
      borderRadius: '4px',
      backgroundColor: alpha(color, 0.2)
    }}>
        <Icon sx={{
        color
      }} />
      </Stack>

      <div>
        <Small lineHeight={1} color="text.secondary">
          {title}
        </Small>

        <H6 fontSize={14}>{subTitle}</H6>
      </div>
    </Stack>;
}