import Stack from '@mui/material/Stack';
import CheckCircle from '@mui/icons-material/CheckCircle'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import SectionTitle from '@/components/section-title';
const REQUIREMENTS = ['Proven experience as a UI/UX designer or a related role, with a strong portfolio showcasing previous work.', 'Proficiency in design software tools such as Sketch, Adobe XD, Figma, or similar.', 'Deep understanding of user-centered design principles and best practices.', 'Ability to conduct user research and interpret user feedback to inform design decisions.', 'Strong visual design skills, with an eye for aesthetics and attention to detail.', 'Familiarity with front-end technologies like HTML, CSS, and basic understanding of how designs translate to code (optional but advantageous).', 'Collaborative nature and effective communication skills to work with cross-functional teams.', 'Ability to prioritize tasks, meet deadlines, and manage multiple projects simultaneously.'];
export default function Requirements() {
  return <div>
      <SectionTitle title="Requirements" fontSize={24} />

      <Stack spacing={3}>
        {REQUIREMENTS.map(item => <FlexBox alignItems="center" gap={2} key={item}>
            <CheckCircle color="success" />
            <p>{item}</p>
          </FlexBox>)}
      </Stack>
    </div>;
}