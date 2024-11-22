import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; // MUI ICON COMPONENT

import CameraAlt from '@mui/icons-material/CameraAlt';
import * as Yup from 'yup';
import { useFormik } from 'formik'; // CUSTOM COMPONENTS

import { H5 } from '@/components/typography';
import AvatarBadge from '@/components/avatar-badge'; // ==========================================================================

// ==========================================================================
export default function AddContactForm({
  handleCancel,
  data
}) {
  const initialValues = {
    firstName: data?.name || '',
    lastName: '',
    birthday: null,
    company: data?.company || '',
    email: data?.email || '',
    phone: data?.phone || ''
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().min(3, 'Must be greater then 3 characters').required('First Name is Required!'),
    lastName: Yup.string().required('Last Name is Required!'),
    email: Yup.string().email('Invalid email address').required('Email is Required!'),
    birthday: Yup.date().required('Date of Birth is Required!'),
    phone: Yup.number().min(9).required('Phone Number is required!'),
    company: Yup.string().required('Company is Required!')
  });
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    setFieldValue
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => console.log(values)
  });
  return <div>
      <H5 fontSize={16} mb={4}>
        Add Contact
      </H5>

      <form onSubmit={handleSubmit}>
        <Stack direction="row" justifyContent="center" mb={6}>
          <AvatarBadge badgeContent={<label htmlFor="icon-button-file">
                <input type="file" accept="image/*" id="icon-button-file" style={{
            display: 'none'
          }} />

                <IconButton aria-label="upload picture" component="span">
                  <CameraAlt sx={{
              fontSize: 16,
              color: 'background.paper'
            }} />
                </IconButton>
              </label>}>
            <Avatar src={data?.avatar || '/static/avatar/001-man.svg'} sx={{
            width: 80,
            height: 80,
            backgroundColor: 'grey.100'
          }} />
          </AvatarBadge>
        </Stack>

        <Grid container spacing={3}>
          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth name="firstName" label="First Name" variant="outlined" onBlur={handleBlur} value={values.firstName} onChange={handleChange} error={Boolean(errors.firstName && touched.firstName)} helperText={touched.firstName && errors.firstName} />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth name="lastName" label="Last Name" variant="outlined" onBlur={handleBlur} value={values.lastName} onChange={handleChange} error={Boolean(errors.lastName && touched.lastName)} helperText={touched.lastName && errors.lastName} />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <DatePicker label="Birthday" value={values.birthday} onChange={date => setFieldValue('birthday', date)} slotProps={{
            textField: {
              fullWidth: true,
              name: 'birthday',
              onBlur: handleBlur,
              error: Boolean(errors.birthday && touched.birthday),
              helperText: touched.birthday && errors.birthday
            }
          }} />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth name="company" label="Company" variant="outlined" onBlur={handleBlur} value={values.company} onChange={handleChange} error={Boolean(errors.company && touched.company)} helperText={touched.company && errors.company} />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth name="email" type="email" label="Email" variant="outlined" onBlur={handleBlur} value={values.email} onChange={handleChange} error={Boolean(errors.email && touched.email)} helperText={touched.email && errors.email} />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth name="phone" label="Phone Number" variant="outlined" onBlur={handleBlur} value={values.phone} onChange={handleChange} error={Boolean(errors.phone && touched.phone)} helperText={touched.phone && errors.phone} />
          </Grid>
        </Grid>

        <Stack direction="row" alignItems="center" spacing={1} mt={4}>
          <Button type="submit" size="small">
            Save
          </Button>

          <Button variant="outlined" size="small" color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </Stack>
      </form>
    </div>;
}