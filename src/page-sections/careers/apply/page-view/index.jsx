import { Fragment } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // MUI

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; // MUI ICON COMPONENT

import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import DropZone from '@/components/dropzone';
import { FlexBox } from '@/components/flexbox';
import { Paragraph } from '@/components/typography';
import HeaderEffect from '@/layouts/root/HeaderEffect';
import SectionTitle from '@/components/section-title'; // STYLED COMPONENT

import { Heading, StyledContainer } from '../styles';
export default function CareerApplyPageView() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is Required!'),
    lastName: Yup.string().required('Last Name is Required!'),
    email: Yup.string().email().required('Email is Required!'),
    phone: Yup.string().min(9).required('Phone is required!')
  });
  const initialValues = {
    email: '',
    phone: '',
    resume: '',
    position: '',
    lastName: '',
    firstName: '',
    portfolio: '',
    coverLetter: '',
    expectedSalary: ''
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {}
  });
  return <Fragment>
      {
      /* PAGE HEADING SECTION */
    }
      <HeaderEffect>
        <Heading>
          <SectionTitle centered title="Job Application Form" />
          <Paragraph fontSize={18}>Please fill in your details below</Paragraph>
        </Heading>
      </HeaderEffect>

      <StyledContainer>
        <Card className="p-3">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid size={{
              md: 6,
              xs: 12
            }}>
                <TextField fullWidth size="medium" name="firstName" onBlur={handleBlur} onChange={handleChange} value={values.firstName} placeholder="First Name*" helperText={touched.firstName && errors.firstName} error={Boolean(touched.firstName && errors.firstName)} />
              </Grid>

              <Grid size={{
              md: 6,
              xs: 12
            }}>
                <TextField fullWidth size="medium" name="lastName" onBlur={handleBlur} onChange={handleChange} value={values.lastName} placeholder="Last Name*" helperText={touched.lastName && errors.lastName} error={Boolean(touched.lastName && errors.lastName)} />
              </Grid>

              <Grid size={{
              md: 6,
              xs: 12
            }}>
                <TextField fullWidth name="email" size="medium" onBlur={handleBlur} value={values.email} placeholder="Email*" onChange={handleChange} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
              </Grid>

              <Grid size={{
              md: 6,
              xs: 12
            }}>
                <TextField fullWidth name="phone" size="medium" onBlur={handleBlur} value={values.phone} placeholder="Phone*" onChange={handleChange} helperText={touched.phone && errors.phone} error={Boolean(touched.phone && errors.phone)} />
              </Grid>

              <Grid size={12}>
                <TextField select fullWidth size="medium" name="position" onBlur={handleBlur} value={values.phone} placeholder="Position*" onChange={handleChange} helperText={touched.position && errors.position} error={Boolean(touched.position && errors.position)} slotProps={{
                select: {
                  native: true,
                  IconComponent: KeyboardArrowDown
                }
              }}>
                  <option value="ui-ux">UI/UX Designer</option>
                  <option value="front-end">Front End Developer</option>
                  <option value="software">Software Engineer</option>
                </TextField>
              </Grid>

              <Grid size={12}>
                <TextField fullWidth size="medium" name="portfolio" onBlur={handleBlur} value={values.phone} placeholder="Portfolio*" onChange={handleChange} helperText={touched.portfolio && errors.portfolio} error={Boolean(touched.portfolio && errors.portfolio)} />
              </Grid>

              <Grid size={12}>
                <TextField fullWidth size="medium" onBlur={handleBlur} value={values.phone} name="expectedSalary" onChange={handleChange} placeholder="Expected Salary*" helperText={touched.expectedSalary && errors.expectedSalary} error={Boolean(touched.expectedSalary && errors.expectedSalary)} />
              </Grid>

              <Grid size={12}>
                <Paragraph color="text.secondary" fontWeight={500} mb={2}>
                  Upload your CV *
                </Paragraph>

                <DropZone onDrop={() => {}} />
              </Grid>

              <Grid size={12}>
                <Paragraph color="text.secondary" fontWeight={500} mb={2}>
                  Upload cover letter
                </Paragraph>

                <DropZone onDrop={() => {}} />
              </Grid>

              <Grid size={12}>
                <FlexBox alignItems="center" gap={2}>
                  <Button type="submit">Apply</Button>

                  <Button color="secondary" variant="outlined" LinkComponent={Link} href="/career">
                    Cancel
                  </Button>
                </FlexBox>
              </Grid>
            </Grid>
          </form>
        </Card>
      </StyledContainer>
    </Fragment>;
}