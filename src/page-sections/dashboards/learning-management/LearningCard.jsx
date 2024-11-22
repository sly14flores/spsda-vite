import { useTranslation } from 'react-i18next'; // MUI

import Card from '@mui/material/Card';
import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/system/colorManipulator';
// CUSTOM COMPONENTS
import { H6 } from '@/components/typography';
import FlexRowAlign from '@/components/flexbox/FlexRowAlign'; // STYLED COMPONENT

const StyledCard = styled(Card)({
  gap: '1rem',
  height: '100%',
  display: 'flex',
  padding: '1.5rem',
  alignItems: 'center'
}); // ==============================================================

// ==============================================================
export default function LearningCard({
  card
}) {
  const {
    Icon,
    title,
    color,
    price
  } = card || {};
  const {
    t
  } = useTranslation();
  return <StyledCard>
      <FlexRowAlign width={45} height={45} borderRadius={2} bgcolor={alpha(color, 0.1)}>
        <Icon sx={{
        color
      }} />
      </FlexRowAlign>

      <div>
        <H6 fontSize={14}>{t(title)}</H6>

        <H6 fontSize={24} color={color}>
          ${price}
        </H6>
      </div>
    </StyledCard>;
}