import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress'; // CUSTOM COMPONENTS

import { Paragraph } from '@/components/typography';
import FlexRowAlign from '@/components/flexbox/FlexRowAlign'; // ==============================================================

// ==============================================================
export default function ProgressItem({
  title,
  value
}) {
  return <FlexRowAlign flexDirection="column" gap={1} maxWidth={80}>
      <Box position="relative" display="inline-flex">
        <CircularProgress size={80} value={100} thickness={3} color="secondary" variant="determinate" // sx={(theme) => ({
      //   color: theme.palette.grey[200],
      //   ...theme.applyStyles('dark', { color: theme.palette.grey[800] }),
      // })}
      />
        <CircularProgress size={80} thickness={3} value={value} disableShrink color="primary" variant="determinate" sx={{
        left: 0,
        position: 'absolute',
        animationDuration: '550ms',
        [`& .${circularProgressClasses.circle}`]: {
          strokeLinecap: 'round'
        }
      }} />
        <FlexRowAlign sx={{
        inset: 0,
        position: 'absolute'
      }}>
          <Typography component="p" sx={{
          fontSize: 16,
          fontWeight: 600
        }}>
            {`${Math.round(value)}%`}
          </Typography>
        </FlexRowAlign>
      </Box>

      <Paragraph fontWeight={500}>{title}</Paragraph>
    </FlexRowAlign>;
}