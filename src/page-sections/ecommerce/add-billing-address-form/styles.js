import FormControlLabel from '@mui/material/FormControlLabel';
import styled from '@mui/material/styles/styled'; //  STYLED COMPONENT

export const StyledFormControlLabel = styled(FormControlLabel)({
  '& .MuiTypography-root': {
    fontSize: 14,
    fontWeight: 500
  }
});
export const FormContainer = styled('div')({
  paddingTop: '1rem',
  '& .checkbox-wrapper': {
    gap: 8,
    display: 'flex',
    alignItems: 'center',
    '& .MuiCheckbox-root': {
      padding: 0
    }
  },
  '& .btn-group': {
    gap: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end'
  }
});