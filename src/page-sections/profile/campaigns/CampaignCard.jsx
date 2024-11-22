import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import { alpha } from '@mui/material/styles'; // MUI ICON COMPONENT

import MoreHoriz from '@mui/icons-material/MoreHoriz'; // CUSTOM COMPONENTS

import { H3, H6, Paragraph } from '@/components/typography';
import { FlexBetween, FlexBox, FlexRowAlign } from '@/components/flexbox'; // CUSTOM UTILS METHOD

import { currency } from '@/utils/currency'; // ====================================================================

// ====================================================================
export default function CampaignCard({
  Icon,
  title,
  color,
  amount,
  impression,
  progressValue
}) {
  return <Card className="p-3">
      <FlexBetween>
        <Stack direction="row" alignItems="center" spacing={1}>
          <FlexRowAlign width={30} height={30} borderRadius={1} bgcolor={alpha(color, 0.1)}>
            <Icon sx={{
            fontSize: 18,
            color
          }} />
          </FlexRowAlign>

          <H6 fontSize={14} color="text.secondary">
            {title}
          </H6>
        </Stack>

        <IconButton>
          <MoreHoriz fontSize="small" color="action" />
        </IconButton>
      </FlexBetween>

      <FlexBetween flexWrap="wrap" gap={0.5} my={2}>
        <H3 fontSize={24}>{currency(amount)}</H3>

        <FlexBox alignItems="center" gap={1}>
          <Paragraph fontWeight={600} color={impression > 0 ? 'success.main' : 'error.main'}>
            {impression}%
          </Paragraph>

          <Paragraph color="text.secondary">Subscriber growth</Paragraph>
        </FlexBox>
      </FlexBetween>

      <Stack direction="row" alignItems="center" spacing={2}>
        <LinearProgress value={progressValue} variant="determinate" sx={{
        '& .MuiLinearProgress-bar': {
          backgroundColor: color
        }
      }} />

        <H6 fontSize={14}>{progressValue}%</H6>
      </Stack>
    </Card>;
}