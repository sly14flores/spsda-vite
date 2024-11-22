// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import styled from '@mui/material/styles/styled'; // MUI ICON COMPONENT

import Star from '@mui/icons-material/Star';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // CUSTOM COMPONENTS

import ReviewItem from './ReviewItem';
import RatingDetails from './RatingDetails';
import { H5, H6, Paragraph } from '@/components/typography'; // CUSTOM ICON COMPONENTS

import Edit from '@/icons/Edit'; // STYLED COMPONENTS

const ContainerGrid = styled(Grid)(({
  theme
}) => ({
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse'
  }
}));
const FirstGrid = styled(Grid)(({
  theme
}) => ({
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.down('md')]: {
    marginTop: 24,
    borderTop: `1px solid ${theme.palette.grey[300]}`
  }
}));
export default function ProductReviews() {
  const initialValues = {
    rating: 2,
    review: '',
    email: '',
    name: ''
  };
  const validationSchema = Yup.object({
    rating: Yup.string().required('Rating is Required!'),
    review: Yup.string().required('Review is Required!'),
    email: Yup.string().required('Email is Required!'),
    name: Yup.string().required('Name is required!')
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
  return <Box padding={3}>
      <ContainerGrid container spacing={3}>
        {
        /* ALL REVIEW LIST */
      }
        <FirstGrid size={{
        md: 8,
        xs: 12
      }}>
          <Stack spacing={4}>
            <ReviewItem liked={234} rating={4} createdAt="14 Nov, 2021" user={{
            name: 'Christina Perry',
            image: '/static/user/user-11.png'
          }} comment="Thank you very fast shipping from Poland only 3days. Very Grateful. Was this review helpful to you?." />

            <ReviewItem liked={234} rating={4} createdAt="14 Nov, 2021" user={{
            name: 'Christina Perry',
            image: '/static/user/user-11.png'
          }} comment="Thank you very fast shipping from Poland only 3days. Very Grateful. Was this review helpful to you?." />

            <ReviewItem liked={234} rating={4} createdAt="14 Nov, 2021" user={{
            name: 'Christina Perry',
            image: '/static/user/user-11.png'
          }} comment="Thank you very fast shipping from Poland only 3days. Very Grateful. Was this review helpful to you?." />
          </Stack>
        </FirstGrid>

        {
        /* AVERAGE RATING INFO */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <Stack alignItems="center">
            <H6 fontSize={16}>Average rating</H6>
            <H5 color="primary.main" my={1.5}>
              4/5
            </H5>

            <Rating readOnly value={4} emptyIcon={<Star sx={{
            opacity: 0.4,
            fontSize: 'inherit'
          }} />} />

            <Paragraph color="text.secondary">(8.24k reviews)</Paragraph>
          </Stack>

          <Box maxWidth={300} margin="auto" pt={4}>
            <Stack spacing={1}>
              <RatingDetails title="5 star" progressValue={74} totalReview={32000} />
              <RatingDetails title="4 star" progressValue={54} totalReview={54000} />
              <RatingDetails title="3 star" progressValue={34} totalReview={37000} />
              <RatingDetails title="2 star" progressValue={24} totalReview={42000} />
              <RatingDetails title="1 star" progressValue={14} totalReview={65000} />
            </Stack>

            <Button fullWidth color="secondary" variant="outlined" startIcon={<Edit />} sx={{
            mt: 4
          }}>
              Write Your review
            </Button>
          </Box>
        </Grid>

        {
        /* CREATE REVIEW FORM */
      }
        <Grid size={12}>
          <Box padding={2}>
            <H6 fontSize={16} mb={1}>
              Add Review
            </H6>

            <form onSubmit={handleSubmit}>
              <Stack direction="row" spacing={1}>
                <Paragraph>Your review about this product:</Paragraph>

                <Rating name="rating" value={values.rating} onChange={(_, newValue) => setFieldValue('rating', newValue)} emptyIcon={<Star sx={{
                opacity: 0.4,
                fontSize: 'inherit'
              }} />} sx={{
                color: 'warning.main',
                fontSize: 18
              }} />
              </Stack>

              <Stack spacing={2} mt={3}>
                <TextField rows={4} fullWidth multiline placeholder="Review" name="review" onBlur={handleBlur} onChange={handleChange} value={values.review} helperText={touched.review && errors.review} error={Boolean(touched.review && errors.review)} />

                <TextField placeholder="Name" fullWidth name="name" onBlur={handleBlur} onChange={handleChange} value={values.name} helperText={touched.name && errors.name} error={Boolean(touched.name && errors.name)} />

                <TextField placeholder="Email" fullWidth name="email" onBlur={handleBlur} onChange={handleChange} value={values.email} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
              </Stack>

              <Stack direction="row" spacing={2} mt={2} justifyContent="end">
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>

                <Button type="submit">Post Review</Button>
              </Stack>
            </form>
          </Box>
        </Grid>
      </ContainerGrid>
    </Box>;
}