import { useContext, useState } from 'react'; // MUI

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import LoadingButton from '@mui/lab/LoadingButton';
import styled from '@mui/material/styles/styled'; // MUI ICON COMPONENTS

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as Yup from 'yup';
import { useFormik } from 'formik'; // FIREBASE CONTEXT FILE

import { AuthContext } from '@/contexts/firebaseContext'; // CUSTOM LAYOUT COMPONENT

import Layout from '@/page-sections/sessions/Layout'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import { H5, H6, Paragraph } from '@/components/typography';
import { FlexBetween, FlexBox, FlexRowAlign } from '@/components/flexbox'; // CUSTOM ICON COMPONENTS

import Twitter from '@/icons/social/Twitter';
import Facebook from '@/icons/social/Facebook';
import GoogleIcon from '@/icons/GoogleIcon'; // STYLED COMPONENT

const StyledButton = styled(ButtonBase)(({
  theme
}) => ({
  padding: 12,
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`
}));
export default function LoginView() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    signInWithEmail,
    signInWithGoogle,
    logout,
    isAuthenticated,
    user
  } = useContext(AuthContext);

  const handleGoogle = async () => {
    await signInWithGoogle();
  };

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
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      try {
        setIsLoading(true);
        await signInWithEmail(values.email, values.password);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  });
  console.log({
    isAuthenticated,
    user
  });

  if (isAuthenticated && user) {
    return <Layout login>
        <Box maxWidth={550} p={4} width="100%">
          <H5 fontSize={{
          sm: 30,
          xs: 25
        }}>Welcome Back</H5>

          <Paragraph mt={1} mb={6} color="text.secondary">
            Hello! {user.email}
          </Paragraph>

          <LoadingButton fullWidth color="error" loading={isLoading} variant="contained" onClick={logout}>
            Logout
          </LoadingButton>
        </Box>
      </Layout>;
  }

  return <Layout login>
      <Box maxWidth={550} p={4}>
        <H5 fontSize={{
        sm: 30,
        xs: 25
      }}>Sign In</H5>

        <Paragraph mt={1} mb={6} color="text.secondary">
          New user?{' '}
          <Box fontWeight={500} component={Link} href="/firebase/register">
            Create an Account
          </Box>
        </Paragraph>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <H6 fontSize={16} mb={1.5}>
                Login with your email id
              </H6>

              <TextField fullWidth placeholder="Enter your work email" name="email" onBlur={handleBlur} value={values.email} onChange={handleChange} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
            </Grid>

            <Grid size={12}>
              <TextField fullWidth placeholder="Password" type={showPassword ? 'text' : 'password'} name="password" onBlur={handleBlur} value={values.password} onChange={handleChange} helperText={touched.password && errors.password} error={Boolean(touched.password && errors.password)} slotProps={{
              input: {
                endAdornment: <FlexRowAlign onClick={() => setShowPassword(!showPassword)} sx={{
                  cursor: 'pointer'
                }}>
                        {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                      </FlexRowAlign>
              }
            }} />

              <FlexBetween my={1}>
                <FlexBox alignItems="center" gap={1}>
                  <Checkbox sx={{
                  p: 0
                }} name="remember" value={values.remember} onChange={handleChange} checked={values.remember} />
                  <Paragraph fontWeight={500}>Remember me</Paragraph>
                </FlexBox>

                <Box href="#" fontSize={13} component={Link} sx={{
                color: 'error.500',
                fontWeight: 500
              }}>
                  Forget Password?
                </Box>
              </FlexBetween>
            </Grid>

            <Grid size={12}>
              <LoadingButton loading={isLoading} type="submit" variant="contained" fullWidth>
                Sign In
              </LoadingButton>
            </Grid>
          </Grid>
        </form>

        <Divider sx={{
        my: 4,
        borderColor: 'grey.200',
        borderWidth: 1
      }}>
          <Paragraph color="text.secondary" px={1}>
            OR
          </Paragraph>
        </Divider>

        <FlexBox justifyContent="center" flexWrap="wrap" gap={2}>
          <StyledButton onClick={handleGoogle}>
            <GoogleIcon sx={{
            fontSize: 18
          }} />
          </StyledButton>

          <StyledButton>
            <Facebook sx={{
            color: '#2475EF',
            fontSize: 18
          }} />
          </StyledButton>

          <StyledButton>
            <Twitter sx={{
            color: '#45ABF7',
            fontSize: 18
          }} />
          </StyledButton>
        </FlexBox>
      </Box>
    </Layout>;
}