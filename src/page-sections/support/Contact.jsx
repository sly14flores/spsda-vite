import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled'; // MUI ICON COMPONENTS

import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // CUSTOM COMPONENTS

import { H6 } from '@/components/typography'; // CUSTOM ICON COMPONENTS

import Twitter from '@/icons/social/Twitter';
import Facebook from '@/icons/social/Facebook'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // STYLED COMPONENTS

const IconGroup = styled('div')(({
  theme
}) => ({
  display: 'flex',
  borderRadius: 16,
  marginTop: '1.5rem',
  alignItems: 'center',
  paddingBlock: '1.5rem',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100],
  '.icon': {
    color: theme.palette.grey[500]
  }
}));
export default function Contact() {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('First Name is Required!'),
    email: Yup.string().email('Invalid Email Address').required('Email is Required!'),
    subject: Yup.string().required('Subject is Required!')
  });
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => console.log(values)
  });
  return <Card className="p-3">
      <Grid container spacing={3}>
        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <H6 fontSize={18} mb={4}>
            Send us Email
          </H6>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3} alignItems="start">
              <TextField fullWidth name="name" placeholder="Name*" onBlur={handleBlur} value={values.name} onChange={handleChange} helperText={touched.name && errors.name} error={Boolean(touched.name && errors.name)} />

              <TextField fullWidth name="email" onBlur={handleBlur} value={values.email} placeholder="Email*" onChange={handleChange} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />

              <TextField fullWidth name="subject" onBlur={handleBlur} placeholder="Subject" value={values.subject} onChange={handleChange} helperText={touched.subject && errors.subject} error={Boolean(touched.subject && errors.subject)} />

              <TextField multiline fullWidth rows={4} name="message" onBlur={handleBlur} placeholder="Message" value={values.message} onChange={handleChange} helperText={touched.message && errors.message} error={Boolean(touched.message && errors.message)} />

              <Button type="submit" sx={{
              px: 6
            }}>
                Submit
              </Button>
            </Stack>
          </form>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Card sx={{
          p: 1
        }}>
            <iframe width="100%" height="400" loading="lazy" allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7375391255605!2d91.85643162915974!3d24.906932698467063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375055a8dba315db%3A0xfed40d384aacd295!2sUI%20Lib!5e0!3m2!1sen!2sbd!4v1676372525624!5m2!1sen!2sbd" style={{
            border: 0
          }} />
          </Card>
        </Grid>

        <Grid size={12}>
          <IconGroup>
            <H6 fontSize={16}>Follow More</H6>

            <div>
              <IconButton>
                <Facebook className="icon" />
              </IconButton>

              <IconButton>
                <Twitter className="icon" />
              </IconButton>

              <IconButton>
                <LinkedIn className="icon" />
              </IconButton>

              <IconButton>
                <GitHub className="icon" />
              </IconButton>
            </div>
          </IconGroup>
        </Grid>
      </Grid>
    </Card>;
}