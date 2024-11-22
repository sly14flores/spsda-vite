import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled'; // MUI ICON COMPONENTS

import GitHub from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import FacebookRounded from '@mui/icons-material/FacebookRounded'; // CUSTOM COMPONENTS

import RouterLink from '@/components/link';
import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph } from '@/components/typography'; // STYLED COMPONENT

const StyledCard = styled(Card)(({
  theme
}) => ({
  gap: 16,
  padding: 24,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .buttons': {
    textAlign: 'right',
    marginBottom: '1rem'
  },
  '& .link': {
    fontSize: 14,
    transition: 'color 300ms',
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary
    }
  },
  [theme.breakpoints.down(635)]: {
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    '& .buttons': {
      textAlign: 'center'
    }
  }
}));
export default function Footer() {
  return <StyledCard>
      <div>
        <Paragraph fontSize={20} fontWeight={600}>
          Uko Admin Template
        </Paragraph>

        <Paragraph color="text.secondary" mb={3}>
          Clean UI & well documented
        </Paragraph>

        <Button href="https://mui.com/store/items/uko-client-admin-dashboard/">Buy Now</Button>
      </div>

      <div>
        <div className="buttons">
          <IconButton>
            <Twitter />
          </IconButton>

          <IconButton>
            <LinkedIn />
          </IconButton>

          <IconButton>
            <FacebookRounded />
          </IconButton>

          <IconButton>
            <GitHub />
          </IconButton>
        </div>

        <FlexBox alignItems="center" gap={2}>
          <RouterLink className="link" href="/about">
            About
          </RouterLink>

          <RouterLink className="link" href="/">
            Support
          </RouterLink>

          <RouterLink className="link" href="/">
            Terms & Conditions
          </RouterLink>
        </FlexBox>
      </div>
    </StyledCard>;
}