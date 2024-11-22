import Card from '@mui/material/Card';
import LinearProgress from '@mui/material/LinearProgress';
import styled from '@mui/material/styles/styled';
import { useTranslation } from 'react-i18next'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography';
import { FlexBox, FlexBetween } from '@/components/flexbox';
const RESULTS = [{
  id: 1,
  progress: 40,
  title: 'React',
  date: '20 March'
}, {
  id: 2,
  progress: 80,
  title: 'Angular',
  date: '15 March'
}, {
  id: 3,
  progress: 60,
  title: 'Vue',
  date: '10 March'
}, {
  id: 4,
  progress: 90,
  title: 'Html',
  date: '1 March'
}, {
  id: 5,
  progress: 80,
  title: 'Css',
  date: '5 March'
}]; // STYLED COMPONENTS

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
  },
  '& .title': {
    overflow: 'hidden'
  }
}));
export default function Results() {
  const {
    t
  } = useTranslation();
  return <StyledRoot>
      <H6 fontSize={14} lineHeight={1}>
        {t('Results')}
      </H6>

      {RESULTS.map(item => <FlexBetween mt={2} key={item.id}>
          <FlexBox gap={1} alignItems="center" width={100}>
            <div className="dot" />

            <div className="title">
              <Paragraph ellipsis fontWeight={500}>
                {item.title}
              </Paragraph>

              <Paragraph ellipsis fontSize={12}>
                {item.date}
              </Paragraph>
            </div>
          </FlexBox>

          <div className="progress-wrapper">
            <LinearProgress variant="determinate" value={item.progress} />
          </div>

          <Paragraph fontWeight={500}>{item.progress}%</Paragraph>
        </FlexBetween>)}
    </StyledRoot>;
}