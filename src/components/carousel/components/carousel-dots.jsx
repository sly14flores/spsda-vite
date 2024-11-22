import { Fragment } from 'react';
// STYLED COMPONENTS
import { Dot, DotList } from '../styles'; // ==============================================================

// ==============================================================
export default function CarouselDots({
  dotColor,
  sx
}) {
  return {
    customPaging: () => <Dot dotColor={dotColor} />,
    appendDots: dots => <Fragment>
        <DotList sx={sx}>{dots}</DotList>
      </Fragment>
  };
}