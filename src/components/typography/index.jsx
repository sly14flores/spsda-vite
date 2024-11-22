import Box from '@mui/material/Box';
import clsx from 'clsx'; // ==============================================================

// ==============================================================
export const H1 = props => {
  const {
    ellipsis,
    sx,
    children,
    className,
    ...others
  } = props;
  return <Box fontSize={48} component="h1" fontWeight={700} {...className && {
    className: clsx({
      [className]: true
    })
  }} sx={{ ...sx,
    ...(ellipsis && {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    })
  }} {...others}>
      {children}
    </Box>;
};
export const H2 = props => {
  const {
    ellipsis,
    children,
    className,
    ...others
  } = props;
  return <Box fontSize={40} component="h2" fontWeight={700} // ellipsis={ellipsis ? 1 : 0}
  {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
      {children}
    </Box>;
};
export const H3 = props => {
  const {
    ellipsis,
    children,
    className,
    ...others
  } = props;
  return <Box fontSize={36} component="h3" fontWeight={700} // ellipsis={ellipsis ? 1 : 0}
  {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
      {children}
    </Box>;
};
export const H4 = props => {
  const {
    ellipsis,
    children,
    className,
    ...others
  } = props;
  return <Box fontSize={32} component="h4" fontWeight={600} // ellipsis={ellipsis ? 1 : 0}
  {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
      {children}
    </Box>;
};
export const H5 = props => {
  const {
    ellipsis,
    children,
    className,
    ...others
  } = props;
  return <Box fontSize={30} component="h5" lineHeight={1} fontWeight={600} // ellipsis={ellipsis ? 1 : 0}
  {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
      {children}
    </Box>;
};
export const H6 = props => {
  const {
    ellipsis,
    children,
    className,
    ...others
  } = props;
  return <Box fontSize={28} component="h6" fontWeight={600} // ellipsis={ellipsis ? 1 : 0}
  {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
      {children}
    </Box>;
};
export const Paragraph = props => {
  const {
    ellipsis,
    children,
    className,
    ...others
  } = props;
  return <Box fontSize={14} component="p" fontWeight={400} // ellipsis={ellipsis ? 1 : 0}
  {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
      {children}
    </Box>;
};
export const Small = props => {
  const {
    ellipsis = false,
    children,
    className,
    ...others
  } = props;
  return <Box fontSize={12} component="small" fontWeight={400} // ellipsis={ellipsis ? 1 : 0}
  {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
      {children}
    </Box>;
};
export const Span = props => {
  const {
    ellipsis = false,
    children,
    className,
    ...others
  } = props;
  return <Box component="span" // ellipsis={ellipsis ? 1 : 0}
  {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
      {children}
    </Box>;
};
export const Tiny = props => {
  const {
    ellipsis = false,
    children,
    className,
    ...others
  } = props;
  return <Box component="p" fontSize={10} fontWeight={400} // ellipsis={ellipsis ? 1 : 0}
  {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
      {children}
    </Box>;
};