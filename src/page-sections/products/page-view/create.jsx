import { useCallback, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // MUI

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; // MUI ICON COMPONENT

import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'; // CUSTOM COMPONENTS

import { H6 } from '@/components/typography';
import DropZone from '@/components/dropzone';
import FlexBox from '@/components/flexbox/FlexBox';
import IconWrapper from '@/components/icon-wrapper'; // CUSTOM ICON COMPONENT

import ShoppingBasket from '@/icons/ShoppingBasket';
export default function CreateProductPageView() {
  const [files, setFiles] = useState([]);

  const handleChangeDescription = value => {
    console.log(value);
  };

  const handleDropFile = useCallback(acceptedFiles => {
    const files = acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    setFiles(files);
  }, []);
  const validationSchema = Yup.object({
    manufacturer: Yup.string().required('Manufacturer is Required!'),
    model: Yup.string().required('Model is Required!'),
    id: Yup.string().required('ID Number is Required!'),
    priority: Yup.string().min(9).required('Prority is required!'),
    name: Yup.string().required('Name is Required!'),
    pro_model: Yup.string().required('Model is Required!'),
    meta_title: Yup.string().required('Meta Title is Required!'),
    meta_tags: Yup.string().required('Meta Tags is Required!'),
    address: Yup.string().required('Address is Required!'),
    zipCode: Yup.number().required('Zip Code is Required!')
  });
  const initialValues = {
    manufacturer: '',
    model: '',
    id: '',
    priority: '',
    name: '',
    pro_model: ''
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
    onSubmit: values => {
      console.log(values, files);
    }
  });
  return <div className="pt-2 pb-4">
      <form onSubmit={handleSubmit}>
        <Card className="p-3">
          <Grid container spacing={3} alignItems="start">
            <Grid size={12}>
              <FlexBox gap={0.5} alignItems="center">
                <IconWrapper>
                  <ShoppingBasket color="primary" />
                </IconWrapper>

                <H6 fontSize={16}>Create New Product</H6>
              </FlexBox>
            </Grid>

            <Grid container spacing={2} size={{
            md: 6,
            xs: 12
          }}>
              <Grid size={12}>
                <H6 fontSize={16}>Main Parameters</H6>
              </Grid>

              <Grid size={{
              sm: 6,
              xs: 12
            }}>
                <TextField fullWidth name="manufacturer" label="Manufacturer" onBlur={handleBlur} onChange={handleChange} value={values.manufacturer} helperText={touched.manufacturer && errors.manufacturer} error={Boolean(touched.manufacturer && errors.manufacturer)} />
              </Grid>

              <Grid size={{
              sm: 6,
              xs: 12
            }}>
                <TextField fullWidth label="Model" name="model" onBlur={handleBlur} value={values.model} onChange={handleChange} helperText={touched.model && errors.model} error={Boolean(touched.model && errors.model)} />
              </Grid>

              <Grid size={{
              sm: 6,
              xs: 12
            }}>
                <TextField fullWidth name="id" label="ID Number" value={values.id} onBlur={handleBlur} onChange={handleChange} helperText={touched.id && errors.id} error={Boolean(touched.id && errors.id)} />
              </Grid>

              <Grid size={{
              sm: 6,
              xs: 12
            }}>
                <TextField fullWidth name="priority" label="Priority" onBlur={handleBlur} onChange={handleChange} value={values.priority} helperText={touched.priority && errors.priority} error={Boolean(touched.priority && errors.priority)} />
              </Grid>

              <Grid size={{
              sm: 6,
              xs: 12
            }}>
                <TextField select fullWidth label="Name" slotProps={{
                select: {
                  native: true,
                  IconComponent: KeyboardArrowDown
                }
              }}>
                  <option value="electronics">Electronics</option>
                  <option value="gadget">Gadget</option>
                  <option value="shoes">Shoes</option>
                </TextField>
              </Grid>

              <Grid size={{
              sm: 6,
              xs: 12
            }}>
                <TextField fullWidth label="Model" name="pro_model" onBlur={handleBlur} onChange={handleChange} value={values.pro_model} helperText={touched.pro_model && errors.pro_model} error={Boolean(touched.pro_model && errors.pro_model)} />
              </Grid>

              <Grid size={12}>
                <TextField label="Meta Title" fullWidth />
              </Grid>

              <Grid size={12}>
                <TextField label="Meta Tags" fullWidth />
              </Grid>

              <Grid size={12}>
                <TextField label="Meta Description" fullWidth />
              </Grid>
            </Grid>

            <Grid container spacing={2} size={{
            md: 6,
            xs: 12
          }}>
              <Grid size={12}>
                <H6 fontSize={16}>Prices and Warehouses</H6>
              </Grid>

              <Grid size={{
              sm: 6,
              xs: 12
            }}>
                <TextField label="Cost" fullWidth />
              </Grid>

              <Grid size={{
              sm: 6,
              xs: 12
            }}>
                <TextField label="Extra" fullWidth />
              </Grid>

              <Grid size={{
              sm: 6,
              xs: 12
            }}>
                <TextField label="Price" fullWidth />
              </Grid>

              <Grid size={{
              sm: 6,
              xs: 12
            }}>
                <TextField fullWidth label="Availability" />
              </Grid>

              <Grid size={12}>
                <TextField fullWidth label="Product Description" multiline rows={9} />
              </Grid>
            </Grid>
          </Grid>
        </Card>

        <Card sx={{
        my: 3
      }}>
          <DropZone onDrop={handleDropFile} />
        </Card>

        <FlexBox flexWrap="wrap" gap={2}>
          <Button type="submit" variant="contained">
            Create New Product
          </Button>

          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
        </FlexBox>
      </form>
    </div>;
}