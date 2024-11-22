import Radio from '@mui/material/Radio'; // STYLED COMPONENTS

import { InnerBox, OuterBox } from './styles'; // ==============================================================

// ==============================================================
export default function ColorRadio({
  icon_color,
  ...props
}) {
  return <Radio icon={<OuterBox>
          <InnerBox color={icon_color} />
        </OuterBox>} checkedIcon={<OuterBox color={icon_color}>
          <InnerBox color={icon_color} />
        </OuterBox>} sx={{
    padding: 0
  }} {...props} />;
}