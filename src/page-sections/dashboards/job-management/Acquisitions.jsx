import Card from '@mui/material/Card';
import LinearProgress from '@mui/material/LinearProgress';
import styled from '@mui/material/styles/styled';
import { useTranslation } from 'react-i18next'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography';
import { FlexBox, FlexBetween } from '@/components/flexbox'; // STYLED COMPONENTS

const StyledRoot = styled(Card)(({
  theme
}) => ({
  height: '100%',
  padding: theme.spacing(3),
  '& .dot': {
    width: 10,
    height: 10,
    flexShrink: 0,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main
  },
  '& .progress-wrapper': {
    flexGrow: 1,
    marginInline: '1rem'
  }
}));
export default function Acquisitions() {
  const {
    t
  } = useTranslation();
  const RESULTS = [{
    id: 1,
    progress: 10,
    title: 'Application'
  }, {
    id: 2,
    progress: 80,
    title: 'Shortlisted'
  }, {
    id: 3,
    progress: 60,
    title: 'Certified'
  }, {
    id: 4,
    progress: 70,
    title: 'On hold'
  }, {
    id: 5,
    progress: 20,
    title: 'Rejected'
  }, {
    id: 6,
    progress: 60,
    title: 'Hired'
  }];
  return <StyledRoot>
      <H6 fontSize={14} lineHeight={1}>
        {t('Acquisitions')}
      </H6>

      {RESULTS.map(item => <FlexBetween mt={3} key={item.id}>
          <FlexBox gap={1} alignItems="center" width={100}>
            <div className="dot" />
            <Paragraph ellipsis fontWeight={500}>
              {item.title}
            </Paragraph>
          </FlexBox>

          <div className="progress-wrapper">
            <LinearProgress variant="determinate" value={item.progress} />
          </div>

          <Paragraph fontWeight={500}>{item.progress}%</Paragraph>
        </FlexBetween>)}
    </StyledRoot>;
}