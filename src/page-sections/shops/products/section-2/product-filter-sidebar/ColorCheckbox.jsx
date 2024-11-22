import { alpha, styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
const Icon = styled('span', {
  shouldForwardProp: prop => prop !== 'bgColor'
})(({
  theme,
  bgColor
}) => ({
  borderRadius: 4,
  width: 18,
  height: 18,
  backgroundColor: bgColor || theme.palette.primary.main
}));
const CheckedIcon = styled(Icon, {
  shouldForwardProp: prop => prop !== 'bgColor'
})(({
  theme
}) => ({
  boxShadow: `2px 2px 6px 0 ${alpha(theme.palette.common.black, 0.35)}`,
  '&::before': {
    display: 'block',
    width: 18,
    height: 18,
    content: '""',
    backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" + " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " + "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")"
  }
})); // ==============================================================

// ==============================================================
export default function ColorCheckbox({
  bgColor,
  ...props
}) {
  return <Checkbox disableRipple color="default" icon={<Icon bgColor={bgColor} />} checkedIcon={<CheckedIcon bgColor={bgColor} />} sx={{
    padding: 0,
    '&:hover': {
      bgcolor: 'transparent'
    }
  }} {...props} />;
}