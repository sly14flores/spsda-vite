import { useState } from 'react';
import { useFormik } from 'formik'; // MUI
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import LoadingButton from '@mui/lab/LoadingButton';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'; // CUSTOM DEFINED HOOK

import Layout from './Layout'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import { H5, H6, Paragraph } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM ICON COMPONENTS

import useStorage from '@/spsda/hooks/useStorage'

import {
  useMutation,
} from '@tanstack/react-query'

import { loginApi } from './api';

export default function LoginPageView() {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const login = useMutation({
    mutationFn: loginApi,
    onSuccess: (res) => {
      const data = res?.data?.data
      useStorage().set({
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        token: data.token,
        role: data.role
      })
      navigate('/dashboard')
    },
    onError: (err) => {
      switch (err?.status) {
        case 401:
          //
          break;
        case 422:
          const errors = err?.response?.data?.data
          setErrors(errors)
          break;
      }
    }
  })

  const initialValues = {
    email: '',
    password: '',
    remember: true
  };

  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setErrors,
  } = useFormik({
    initialValues,
    onSubmit: async (values) => {

      login.mutate({email: values.email, password: values.password})

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
              <LoadingButton loading={login.isSubmitting} type="submit" variant="contained" fullWidth>
                Sign In
              </LoadingButton>
            </Grid>
          </Grid>
        </form>

      </Box>
    </Layout>;
}