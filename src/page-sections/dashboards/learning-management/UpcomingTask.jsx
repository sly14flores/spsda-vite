import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // MUI ICON COMPONENT

import MoreHoriz from '@mui/icons-material/MoreHoriz'; // MUI

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween'; // STYLED COMPONENTS

const StyledRoot = styled(Card)(({
  theme
}) => ({
  height: '100%',
  padding: theme.spacing(3),
  '& .link': {
    fontSize: 14
  }
}));
const TodoContent = styled('div')(({
  theme
}) => ({
  paddingLeft: '1rem',
  position: 'relative',
  '&::after': {
    top: 0,
    left: 0,
    width: '4px',
    content: '""',
    height: '100%',
    borderRadius: 16,
    position: 'absolute',
    backgroundColor: theme.palette.primary.main
  }
}));
export default function UpcomingTask() {
  const {
    t
  } = useTranslation();
  return <StyledRoot>
      <FlexBetween pb={1}>
        <H6 fontSize={14} lineHeight={1}>
          {t('Upcoming Task')}
        </H6>

        <NavLink to="#" className="link">
          View all Tasks
        </NavLink>
      </FlexBetween>

      <Box>
        {TASKS.map(item => <FlexBetween mt={2.5} key={item.id}>
            <TodoContent>
              <Paragraph fontWeight={500} lineHeight={1.9}>
                {item.title}
              </Paragraph>
              <Paragraph fontSize={12} color="text.secondary">
                {item.time}
              </Paragraph>
            </TodoContent>

            <IconButton>
              <MoreHoriz fontSize="small" />
            </IconButton>
          </FlexBetween>)}
      </Box>
    </StyledRoot>;
}
const TASKS = [{
  id: 1,
  title: 'Meet with Simple',
  time: '01:00 PM - 02:00 PM'
}, {
  id: 2,
  title: 'Fitness Run',
  time: '03:00 PM - 04:00 PM'
}, {
  id: 3,
  title: 'Dental Care',
  time: '06:00 PM - 07:00 PM'
}, {
  id: 4,
  title: 'Dinner Date',
  time: '09:00 PM - 11:00 PM'
}];