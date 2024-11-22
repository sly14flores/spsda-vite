import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENTS

export const StyledAccordionSummary = styled(AccordionSummary)(({
  theme
}) => ({
  color: theme.palette.text.primary
}));
export const StyledAccordionDetails = styled(AccordionDetails)(({
  theme
}) => ({
  color: theme.palette.grey[isDark(theme) ? 400 : 700]
}));