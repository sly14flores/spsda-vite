import Stack from '@mui/material/Stack';
import CheckCircle from '@mui/icons-material/CheckCircle'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import SectionTitle from '@/components/section-title';
const REQUIREMENTS = ['Creative expression and innovation.', 'High demand and job opportunities.', 'Continuous learning and growth.', 'Collaborative and diverse work environment.', 'Problem-solving and user empathy.', 'Versatility in project types.', 'Remote work possibilities.', 'Competitive salaries.', 'Recognition and impact.'];
export default function Offers() {
  return <div>
      <SectionTitle title="What we offer" fontSize={24} />

      <Stack spacing={3}>
        {REQUIREMENTS.map(item => <FlexBox alignItems="center" gap={2} key={item}>
            <CheckCircle color="success" />
            <p>{item}</p>
          </FlexBox>)}
      </Stack>
    </div>;
}