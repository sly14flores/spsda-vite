import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled'; // MUI ICON COMPONENTS

import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import SportsBasketball from '@mui/icons-material/SportsBasketball';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography'; // STYLED COMPONENTS

const StyledRoot = styled(Card)(({
  theme
}) => ({
  padding: '1.5rem',
  textAlign: 'center',
  '& .img-wrapper': {
    width: 50,
    height: 50,
    margin: 'auto',
    overflow: 'hidden',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary[100]
  },
  '& .icon-group': {
    marginTop: '1rem'
  }
}));
export default function RecommendedCard() {
  return <StyledRoot>
      <div className="img-wrapper">
        <img src="/static/user/user-11.png" alt="User" width="100%" />
      </div>

      <H6 fontSize={14} mt={2}>
        Selena Gomez
      </H6>

      <Paragraph color="text.secondary">Marketing Manager</Paragraph>

      <div className="icon-group">
        <IconButton>
          <FacebookOutlined />
        </IconButton>

        <IconButton>
          <Twitter />
        </IconButton>

        <IconButton>
          <Instagram />
        </IconButton>

        <IconButton>
          <SportsBasketball />
        </IconButton>
      </div>
    </StyledRoot>;
}