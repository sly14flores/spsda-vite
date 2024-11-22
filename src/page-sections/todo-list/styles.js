import styled from '@mui/material/styles/styled';
import IconButton from '@mui/material/IconButton';
export const DroppableWrapper = styled('div')({
  height: '100%',
  padding: '1rem'
});
export const MoreButton = styled(IconButton)(({
  theme
}) => ({
  backgroundColor: theme.palette.grey[50],
  border: `1px solid ${theme.palette.grey[100]}`
}));