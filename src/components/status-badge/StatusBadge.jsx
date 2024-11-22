// STYLED COMPONENT
import { Status } from './styles';
// ==============================================================
export default function StatusBadge({
  children,
  type,
  ...props
}) {
  return <Status type={type} {...props}>
      {children}
    </Status>;
}