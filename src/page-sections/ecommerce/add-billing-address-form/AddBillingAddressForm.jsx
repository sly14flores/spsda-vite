import Grid from '@mui/material/Grid2';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography'; //  STYLED COMPONENT

import { FormContainer, StyledFormControlLabel } from './styles'; // ==============================================================

// ==============================================================
export default function AddBillingAddressForm({
  handleCancel
}) {
  const initialValues = {
    name: '',
    city: '',
    phone: '',
    country: '',
    address: '',
    type: 'home',
    isDefault: false
  };
  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Must be greater then 3 characters').required('Name is Required!'),
    city: Yup.string().required('City is Required!'),
    phone: Yup.string().min(9).required('Phone is required!'),
    country: Yup.string().required('Country is Required!'),
    address: Yup.string().required('Address is Required!'),
    type: Yup.string().oneOf(['home', 'office']).required('Type is Required!')
  });
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    touched
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      handleCancel();
    }
  });
  return <form onSubmit={handleSubmit}>
      <H6 fontSize={16}>Add new address</H6>

      <FormContainer>
        <Grid container spacing={3}>
          <Grid size={12}>
            <RadioGroup row name="type" value={values.type} onChange={handleChange}>
              <StyledFormControlLabel value="home" control={<Radio />} label="Home" />
              <StyledFormControlLabel value="office" control={<Radio />} label="Office" />
            </RadioGroup>
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth name="name" size="small" label="Full Name" value={values.name} onBlur={handleBlur} onChange={handleChange} helperText={touched.name && errors.name} error={Boolean(touched.name && errors.name)} />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth size="small" name="phone" label="Phone" onBlur={handleBlur} value={values.phone} onChange={handleChange} helperText={touched.phone && errors.phone} error={Boolean(touched.phone && errors.phone)} />
          </Grid>

          <Grid size={12}>
            <TextField fullWidth size="small" name="address" label="Address" onBlur={handleBlur} value={values.address} onChange={handleChange} helperText={touched.address && errors.address} error={Boolean(touched.address && errors.address)} />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth size="small" label="City" name="city" value={values.city} onBlur={handleBlur} onChange={handleChange} helperText={touched.city && errors.city} error={Boolean(touched.city && errors.city)} />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth size="small" label="Country" name="country" onBlur={handleBlur} value={values.country} onChange={handleChange} helperText={touched.country && errors.country} error={Boolean(touched.country && errors.country)} />
          </Grid>

          <Grid size={12}>
            <div className="checkbox-wrapper">
              <Checkbox name="isDefault" onChange={handleChange} checked={values.isDefault} />
              <Paragraph>Use this address as default</Paragraph>
            </div>
          </Grid>

          <Grid size={12}>
            <div className="btn-group">
              <Button variant="outlined" color="secondary" onClick={handleCancel}>
                Cancel
              </Button>

              <Button variant="contained" type="submit">
                Deliver to this address
              </Button>
            </div>
          </Grid>
        </Grid>
      </FormContainer>
    </form>;
}