import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; // MUI ICON COMPONENT

import CheckCircle from '@mui/icons-material/CheckCircle'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox'; // STYLED COMPONENTS

import { StyledCard, StyledChip } from './styles'; // ==============================================================

// ==============================================================
export default function PricingCard({
  title,
  price,
  popular,
  icon,
  features
}) {
  return <StyledCard active={popular ? 1 : 0}>
      {
      /* PLAN POPULAR TAG */
    }
      {popular ? <StyledChip label="POPULAR" /> : null}

      {
      /* PLAN TITLE */
    }
      <p className="plan-title">{title}</p>

      {
      /* PLAN PRICE */
    }
      {price ? <h1 className="plan-price">
          ${price}
          <span>/month</span>
        </h1> : <h1 className="plan-price">Free</h1>}

      {
      /* ICON */
    }
      <img src={icon} alt="shape" />

      {
      /* FEATURE LIST */
    }
      <Stack spacing={2} mt={5} mb={6}>
        {features.map(item => <FlexBox alignItems="center" gap={1} key={item}>
            <CheckCircle color="success" />
            <p>{item}</p>
          </FlexBox>)}
      </Stack>

      <Button fullWidth color={popular ? 'primary' : 'secondary'}>
        Choose Plan
      </Button>
    </StyledCard>;
}