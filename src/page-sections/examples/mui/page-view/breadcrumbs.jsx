import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs'; // MUI ICON COMPONENTS

import Home from '@mui/icons-material/Home';
import KeyboardTabOutlined from '@mui/icons-material/KeyboardTabOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'; // CUSTOM COMPONENT

import Link from '@/components/link';
import Block from '@/components/block';
import { Paragraph } from '@/components/typography';
import ComponentPageLayout from '../../ComponentPageLayout';
export default function MuiBreadcrumbsPageView() {
  return <ComponentPageLayout title="Breadcrumbs">
      <Grid container spacing={3}>
        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Basic">
            <Stack direction="row" spacing={2} justifyContent="center">
              <Breadcrumbs>
                <Box component={Link} href="#" fontSize={16} color="inherit">
                  Home
                </Box>

                <Box component={Link} href="#" fontSize={16} color="inherit">
                  Product Page
                </Box>

                <Paragraph fontSize={16} color="grey.400">
                  Active
                </Paragraph>
              </Breadcrumbs>
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="With Dot">
            <Stack direction="row" spacing={2} justifyContent="center">
              <Breadcrumbs aria-label="breadcrumb" separator={<Box className="dot" />}>
                <Box component={Link} href="#" fontSize={16} color="inherit">
                  Home
                </Box>

                <Box component={Link} href="#" fontSize={16} color="inherit">
                  Product Page
                </Box>

                <Paragraph fontSize={16} color="grey.400">
                  Active
                </Paragraph>
              </Breadcrumbs>
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="With Icon">
            <Stack direction="row" spacing={2} justifyContent="center">
              <Breadcrumbs aria-label="breadcrumb">
                <Box component={Link} href="/" display="flex" alignItems="center" color="inherit">
                  <Home sx={{
                  mr: 0.5
                }} fontSize="inherit" />
                  Home
                </Box>

                <Box component={Link} href="/" display="flex" alignItems="center" color="inherit">
                  <ShoppingCartOutlined fontSize="inherit" sx={{
                  mr: 0.5
                }} />
                  Product Page
                </Box>

                <Box display="flex" alignItems="center" color="grey.400">
                  <KeyboardTabOutlined fontSize="inherit" sx={{
                  mr: 0.5
                }} />
                  Active
                </Box>
              </Breadcrumbs>
            </Stack>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
}