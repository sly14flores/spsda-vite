// MUI
import Chip from '@mui/material/Chip'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph } from '@/components/typography'; // STYLED COMPONENT

import { StyledRoot } from './styles'; // ==============================================================

// ==============================================================
export default function ListItem(props) {
  const {
    title,
    value,
    Icon,
    active,
    handleChange
  } = props;
  return <StyledRoot active={active} onClick={handleChange}>
      <FlexBox gap={1.5} alignItems="center">
        {Icon}

        <Paragraph className="title" fontWeight={400} fontSize={16}>
          {title}
        </Paragraph>
      </FlexBox>

      {value > 0 && <Chip className="badge" size="small" label={`(${value})`} color="secondary" />}
    </StyledRoot>;
}