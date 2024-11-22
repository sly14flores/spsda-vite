// STYLED COMPONENT
import { StyledSpan } from './styles';
// ==============================================================
export default function Percentage({
  children,
  type = 'success',
  ellipsis = false,
  ...props
}) {
  return <StyledSpan ellipsis={ellipsis} type={type} {...props}>
      {children}
    </StyledSpan>;
}