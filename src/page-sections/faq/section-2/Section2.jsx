import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion'; // MUI ICON COMPONENT

import ExpandMore from '@mui/icons-material/ExpandMore'; // CUSTOM COMPONENT

import SectionTitle from '@/components/section-title'; // STYLED COMPONENTS

import { StyledAccordionDetails, StyledAccordionSummary } from './styles';
export default function Section2() {
  return <Container maxWidth="lg" className="py-10">
      <SectionTitle centered title="Frequently asked questions" />

      <Stack maxWidth={700} margin="auto" mt={7}>
        <Accordion>
          <StyledAccordionSummary expandIcon={<ExpandMore />}>
            What is project management software?
          </StyledAccordionSummary>

          <StyledAccordionDetails>
            Project management software helps teams to stay organized and on track by providing a
            central hub for project information, task assignment, & progress tracking. It also
            facilitate communication & collaboration between team members, reducing the risk
            miscommunication.
            <br /> <br />
            Project management software helps teams to stay organized and on track by providing a
            central hub for project information, task assignment, & progress tracking. It also
            facilitate communication & collaboration between team members, reducing the risk
            miscommunication. <br /> <br />
            Project management software helps teams to stay organized and on track by providing a
            central hub for project information, task assignment, & progress tracking. It also
            facilitate communication & collaboration between team members, reducing the risk
            miscommunication.
          </StyledAccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <StyledAccordionSummary expandIcon={<ExpandMore />}>
            How does project management software help teams?
          </StyledAccordionSummary>

          <StyledAccordionDetails>
            Project management software helps teams to stay organized and on track by providing a
            central hub for project information, task assignment, & progress tracking. It also
            facilitate communication & collaboration between team members, reducing the risk
            miscommunication.
          </StyledAccordionDetails>
        </Accordion>

        <Accordion>
          <StyledAccordionSummary expandIcon={<ExpandMore />}>
            What features should I look for in project management software?
          </StyledAccordionSummary>

          <StyledAccordionDetails>
            Project management software helps teams to stay organized and on track by providing a
            central hub for project information, task assignment, & progress tracking. It also
            facilitate communication & collaboration between team members, reducing the risk
            miscommunication.
          </StyledAccordionDetails>
        </Accordion>

        <Accordion>
          <StyledAccordionSummary expandIcon={<ExpandMore />}>
            Is project management software easy to use?
          </StyledAccordionSummary>

          <StyledAccordionDetails>
            Project management software helps teams to stay organized and on track by providing a
            central hub for project information, task assignment, & progress tracking. It also
            facilitate communication & collaboration between team members, reducing the risk
            miscommunication.
          </StyledAccordionDetails>
        </Accordion>

        <Accordion>
          <StyledAccordionSummary expandIcon={<ExpandMore />}>
            Can project management software be used by remote teams?
          </StyledAccordionSummary>

          <StyledAccordionDetails>
            Project management software helps teams to stay organized and on track by providing a
            central hub for project information, task assignment, & progress tracking. It also
            facilitate communication & collaboration between team members, reducing the risk
            miscommunication.
          </StyledAccordionDetails>
        </Accordion>
      </Stack>
    </Container>;
}