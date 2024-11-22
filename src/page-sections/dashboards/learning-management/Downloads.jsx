import { useTranslation } from 'react-i18next'; // MUI

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ButtonBase from '@mui/material/ButtonBase';
import LinearProgress from '@mui/material/LinearProgress';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import { FlexBox, FlexBetween } from '@/components/flexbox';
import { H6, Paragraph } from '@/components/typography'; // STYLED COMPONENTS

const StyledRoot = styled(Card)(({
  theme
}) => ({
  height: '100%',
  padding: theme.spacing(3),
  '& .item-content': {
    flexGrow: 1
  },
  '& .download-btn': {
    color: theme.palette.primary.main
  },
  '& .cancel-btn': {
    color: theme.palette.error.main
  }
}));
export default function Downloads() {
  const {
    t
  } = useTranslation();
  return <StyledRoot>
      <H6 fontSize={14} pb={1}>
        {t('Your Downloads')}
      </H6>

      {downloadList.map(item => <FlexBox alignItems="center" mt={2} gap={1} key={item.id}>
          <Box width={40}>
            <img src="/static/files-icon/pdf.svg" width="100%" alt="file" />
          </Box>

          <div className="item-content">
            <FlexBetween>
              <Paragraph fontWeight={500}>ReactJS-for-beginner.pdf</Paragraph>
              {item.isDownloading ? <ButtonBase disableRipple disableTouchRipple className="cancel-btn">
                  Cancel
                </ButtonBase> : null}
            </FlexBetween>

            {item.isDownloading ? <Paragraph>4.5 MB</Paragraph> : null}

            {item.isDownloading ? <FlexBetween gap={2}>
                <LinearProgress variant="determinate" value={60} sx={{
            flexGrow: 1
          }} />
                <Paragraph fontSize={12} fontWeight={600}>
                  60%
                </Paragraph>
              </FlexBetween> : <FlexBetween gap={2}>
                <Paragraph>4.5 MB</Paragraph>

                <ButtonBase disableRipple disableTouchRipple className="download-btn">
                  Download
                </ButtonBase>
              </FlexBetween>}
          </div>
        </FlexBox>)}
    </StyledRoot>;
}
const downloadList = [{
  id: 0,
  size: 4.5,
  name: 'ReactJS-for-beginner.pdf',
  image: '/static/files-icon/pdf.svg',
  isDownloading: true
}, {
  id: 1,
  size: 3.5,
  name: 'Wordpress for beginner',
  image: '/static/files-icon/pdf.svg',
  isDownloading: false
}, {
  id: 2,
  size: 3.9,
  name: 'Master in Node.js',
  image: '/static/files-icon/doc.svg',
  isDownloading: false
}, {
  id: 3,
  size: 4.9,
  name: 'Vue Zero to Hero',
  image: '/static/files-icon/doc.svg',
  isDownloading: false
}];