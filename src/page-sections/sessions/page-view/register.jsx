import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // MUI

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField'; // CUSTOM DEFINED HOOK

import useAuth from '@/hooks/useAuth'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import { H5, H6, Paragraph } from '@/components/typography'; // CUSTOM SESSIONS LAYOUT

import Layout from '../Layout';
export default function RegisterPageView() {
  const navigate = useNavigate();
  const {
    createUserWithEmail
  } = useAuth();
  const initialValues = {
    email: 'demo@example.com',
    password: 'password123456',
    remember: true
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required') // password: Yup.string()
    //   .min(6, "Password should be of minimum 6 characters length")
    //   .required("Password is required"),

  });
  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      try {
        await createUserWithEmail(values.email, values.password);
        navigate('/');
      } catch (error) {
        console.log(error.message);
      }
    }
  });
  return <Layout>
      <Box maxWidth={550} p={4}>
        <H5 fontSize={{
        sm: 30,
        xs: 25
      }}>Sign up for 14 days free trial</H5>

        <Paragraph mt={1} mb={6} color="text.secondary">
          No risk, no obligations, no credit-card required.
        </Paragraph>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <H6 fontSize={16} mb={1}>
                Register with your email id
              </H6>

              <TextField fullWidth placeholder="Enter your work email" name="email" onBlur={handleBlur} value={values.email} onChange={handleChange} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
            </Grid>

            <Grid size={12}>
              <Button type="submit" variant="contained" fullWidth>
                Sign up via Email
              </Button>

              <Paragraph mt={1} color="text.secondary">
                By signing up, you agree{' '}
                <Box fontWeight={500} component={Link} href="#">
                  Terms of Service
                </Box>{' '}
                & your consent to receiving email communications from Sales handy.
              </Paragraph>
            </Grid>
          </Grid>
        </form>

        <Divider sx={{
        my: 4,
        color: 'text.secondary',
        fontSize: 13
      }}>
          Already have an account?
        </Divider>

        <Button fullWidth variant="text" onClick={() => navigate('/login')} sx={{
        backgroundColor: 'primary.50'
      }}>
          Log In
        </Button>
      </Box>
    </Layout>;
}