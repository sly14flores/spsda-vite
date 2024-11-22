// STYLED COMPONENT
import { StyledFancyText } from './style'; // ==============================================================

// ==============================================================
export default function FancyText({
  children,
  ...props
}) {
  return <StyledFancyText {...props}>{children}</StyledFancyText>;
}