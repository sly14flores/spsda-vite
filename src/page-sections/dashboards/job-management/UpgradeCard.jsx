import Card from '@mui/material/Card'; // CUSTOM COMPONENTS

import { H6, Span } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween';
export default function UpgradeCard() {
  return <Card className="p-3">
      <FlexBetween flexDirection="column">
        <H6 fontSize={18} pb={4} maxWidth={200} textAlign="center">
          Upgrade to <Span color="primary.main">PRO</Span> for more resources
        </H6>

        <img src="/static/illustration/job-management.svg" width="100%" alt="Upgrade" />
      </FlexBetween>
    </Card>;
}