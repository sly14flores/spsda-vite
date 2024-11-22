import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import * as Yup from 'yup';
import { useFormik } from 'formik'; // CUSTOM COMPONENTS

import { H6 } from '@/components/typography';
export default function InfoForm() {
  const initialValues = {
    firstName: 'Pixy',
    lastName: 'Krovasky',
    email: 'uilib@gmail.com',
    phone: '+443322221111',
    organization: 'UiLib',
    department: 'Develop',
    country: 'usa',
    state: 'New York',
    address: 'Corverview, Michigan',
    zipCode: 4336
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().min(3, 'Must be greater then 3 characters').required('First Name is Required!'),
    lastName: Yup.string().required('Last Name is Required!'),
    email: Yup.string().email('Invalid email address').required('Email is Required!'),
    phone: Yup.string().min(9).required('Phone Number is required!'),
    organization: Yup.string().required('Organization is Required!'),
    department: Yup.string().required('Department is Required!'),
    country: Yup.string().required('Country is Required!'),
    state: Yup.string().required('State is Required!'),
    address: Yup.string().required('Address is Required!'),
    zipCode: Yup.number().required('Zip Code is Required!')
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
    onSubmit: values => console.log(values)
  });
  return <Card sx={{
    mt: 3
  }}>
      <H6 fontSize={14} px={3} py={2}>
        Basic Information
      </H6>

      <Divider />

      <form onSubmit={handleSubmit}>
        <Box margin={3}>
          <Grid container spacing={3}>
            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="firstName" label="First Name" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.firstName} helperText={touched.firstName && errors.firstName} error={Boolean(touched.firstName && errors.firstName)} />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="lastName" label="Last Name" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.lastName} helperText={touched.lastName && errors.lastName} error={Boolean(touched.lastName && errors.lastName)} />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="email" label="Email" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.email} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="phone" label="Phone" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.phone} helperText={touched.phone && errors.phone} error={Boolean(touched.phone && errors.phone)} />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="organization" variant="outlined" label="Organization" onBlur={handleBlur} onChange={handleChange} value={values.organization} helperText={touched.organization && errors.organization} error={Boolean(touched.organization && errors.organization)} />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="department" variant="outlined" label="Department" onBlur={handleBlur} onChange={handleChange} value={values.department} helperText={touched.department && errors.department} error={Boolean(touched.department && errors.department)} />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField select fullWidth name="country" label="Country" variant="outlined" placeholder="Country" onBlur={handleBlur} onChange={handleChange} value={values.country} helperText={touched.country && errors.country} error={Boolean(touched.country && errors.country)} slotProps={{
              select: {
                native: true,
                IconComponent: KeyboardArrowDown
              }
            }}>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="uae">United Arab Emirates</option>
              </TextField>
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="state" label="State" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.state} helperText={touched.state && errors.state} error={Boolean(touched.state && errors.state)} />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth name="address" label="Address" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.address} helperText={touched.address && errors.address} error={Boolean(touched.address && errors.address)} />
            </Grid>

            <Grid size={{
            sm: 6,
            xs: 12
          }}>
              <TextField fullWidth type="number" name="zipCode" label="Zip Code" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.zipCode} helperText={touched.zipCode && errors.zipCode} error={Boolean(touched.zipCode && errors.zipCode)} />
            </Grid>

            <Grid size={12}>
              <Button type="submit" variant="contained">
                Save Changes
              </Button>

              <Button variant="outlined" sx={{
              ml: 2
            }}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Card>;
}