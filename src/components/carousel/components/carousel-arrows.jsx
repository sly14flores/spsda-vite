// MUI ICON COMPONENTS
import KeyboardDoubleArrowLeft from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight'; // STYLED COMPONENT

import { ArrowButton } from '../styles'; // ==============================================================

// ==============================================================
function NextArrow({
  onClick,
  sx,
  className
}) {
  const updatedClassName = className.split(' ').filter(item => item !== 'slick-next').join(' ');
  return <ArrowButton onClick={onClick} className={`next ${updatedClassName}`} sx={sx}>
      <KeyboardDoubleArrowRight fontSize="small" color="inherit" className="forward-icon" />
    </ArrowButton>;
}

function PrevArrow({
  onClick,
  sx,
  className
}) {
  const updatedClassName = className.split(' ').filter(item => item !== 'slick-prev').join(' ');
  return <ArrowButton onClick={onClick} className={`prev ${updatedClassName}`} sx={sx}>
      <KeyboardDoubleArrowLeft fontSize="small" color="inherit" className="back-icon" />
    </ArrowButton>;
}

export default function CarouselArrows({
  sx
}) {
  return {
    nextArrow: <NextArrow sx={sx} />,
    prevArrow: <PrevArrow sx={sx} />
  };
}