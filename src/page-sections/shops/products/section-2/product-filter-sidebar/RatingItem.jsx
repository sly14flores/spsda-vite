import Rating from '@mui/material/Rating';
import styled from '@mui/material/styles/styled'; // STYLED COMPONENT

const StyledRoot = styled('div', {
  shouldForwardProp: prop => prop !== 'active'
})(({
  theme,
  active
}) => ({
  paddingBlock: 3,
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  gap: theme.spacing(1),
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  },
  '& .text': {
    fontSize: 14,
    lineHeight: 1,
    fontWeight: 500,
    color: theme.palette.text.secondary
  },
  ...(active && {
    backgroundColor: theme.palette.action.hover
  })
})); // ==============================================================

// ==============================================================
export default function RatingItem({
  value,
  onClick,
  isActive
}) {
  return <StyledRoot onClick={onClick} active={isActive}>
      <Rating readOnly value={value} size="small" />
      <p className="text">& up</p>
    </StyledRoot>;
}