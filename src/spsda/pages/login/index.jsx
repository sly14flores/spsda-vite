import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik'; // MUI

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import LoadingButton from '@mui/lab/LoadingButton';
import styled from '@mui/material/styles/styled'; // MUI ICON COMPONENT

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'; // CUSTOM DEFINED HOOK

import useAuth from '@/hooks/useAuth'; // CUSTOM LAYOUT COMPONENT

import Layout from './Layout'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import { H5, H6, Paragraph } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM ICON COMPONENTS

const StyledButton = styled(ButtonBase)(({
  theme
}) => ({
  padding: 12,
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`
}));
export default function LoginPageView() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    signInWithEmail,
    signInWithGoogle
  } = useAuth();

  const initialValues = {
    email: 'jason@ui-lib.com',
    password: 'dummyPass',
    remember: true
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string().min(6, 'Password should be of minimum 6 characters length').required('Password is required')
  });
  const {
    errors,
    values,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      try {
        await signInWithEmail(values.email, values.password);
      } catch (error) {
        console.log(error);
      }
    }
  });
  return <Layout login>
      <Box maxWidth={550} p={4}>
        <H5 fontSize={{
        sm: 30,
        xs: 25
      }}>Sign In</H5>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <H6 fontSize={16} mt={1} mb={4}>
                Login with your email id
              </H6>

              <TextField fullWidth placeholder="Enter your work email" name="email" onBlur={handleBlur} value={values.email} onChange={handleChange} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
            </Grid>

            <Grid size={12}>
              <TextField fullWidth placeholder="Password" type={showPassword ? 'text' : 'password'} name="password" onBlur={handleBlur} value={values.password} onChange={handleChange} helperText={touched.password && errors.password} error={Boolean(touched.password && errors.password)} slotProps={{
              input: {
                endAdornment: <ButtonBase disableRipple disableTouchRipple onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                      </ButtonBase>
              }
            }} />

              <FlexBetween my={1}>
                <FlexBox alignItems="center" gap={1}>
                  <Checkbox sx={{
                  p: 0
                }} name="remember" value={values.remember} onChange={handleChange} checked={values.remember} />
                  <Paragraph fontWeight={500}>Remember me</Paragraph>
                </FlexBox>

                <Box fontSize={13} component={Link} fontWeight={500} color="error.500" href="/forgot-password">
                  Forget Password?
                </Box>
              </FlexBetween>
            </Grid>

            <Grid size={12}>
              <LoadingButton loading={isSubmitting} type="submit" variant="contained" fullWidth>
                Sign In
              </LoadingButton>
            </Grid>
          </Grid>
        </form>

      </Box>
    </Layout>;
}