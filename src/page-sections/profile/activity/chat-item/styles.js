import AvatarGroup from '@mui/material/AvatarGroup';
import styled from '@mui/material/styles/styled'; // STYLED COMPONENTS

export const StyledAvatarGroup = styled(AvatarGroup)(({
  theme
}) => ({
  justifyContent: 'flex-end',
  '& .MuiAvatarGroup-avatar': {
    width: 25,
    height: 25,
    fontSize: 12,
    color: theme.palette.primary.main,
    borderColor: theme.palette.common.white,
    backgroundColor: theme.palette.primary[100]
  }
}));
export const StyledRoot = styled('div')(({
  theme
}) => ({
  minWidth: 650,
  display: 'flex',
  padding: '1rem',
  marginTop: '1rem',
  borderRadius: '1rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: `1px solid ${theme.palette.divider}`
}));