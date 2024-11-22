import { useState } from 'react'; // MUI

import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import TablePagination from '@mui/material/TablePagination'; // CUSTOM COMPONENTS

import Block from '@/components/block';
import ComponentPageLayout from '../../ComponentPageLayout';
export default function MuiPaginationPageView() {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  return <ComponentPageLayout title="Pagination">
      <Grid container spacing={3}>
        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Circular" bgTransparent>
            <Stack alignItems="center" spacing={3}>
              <Pagination count={15} />
              <Pagination count={10} color="secondary" />
              <Pagination count={10} color="standard" />
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Circular Outlined" bgTransparent>
            <Stack alignItems="center" spacing={3}>
              <Pagination count={15} variant="outlined" />
              <Pagination count={10} variant="outlined" color="secondary" />
              <Pagination count={10} variant="outlined" color="standard" />
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Rounded" bgTransparent>
            <Stack alignItems="center" spacing={3}>
              <Pagination count={10} shape="rounded" />
              <Pagination count={10} shape="rounded" color="secondary" />
              <Pagination count={10} shape="rounded" color="standard" />
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Rounded Outlined" bgTransparent>
            <Stack alignItems="center" spacing={3}>
              <Pagination count={10} variant="outlined" shape="rounded" />
              <Pagination count={10} variant="outlined" shape="rounded" color="secondary" />
              <Pagination count={10} variant="outlined" shape="rounded" color="standard" />
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Sizes" bgTransparent>
            <Stack alignItems="center" spacing={3}>
              <Pagination count={10} size="small" />
              <Pagination count={10} />
              <Pagination count={10} size="large" />
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Ranges" bgTransparent>
            <Stack alignItems="center" spacing={3}>
              <Pagination count={11} defaultPage={6} siblingCount={0} />
              <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} />
              <Pagination count={11} defaultPage={6} boundaryCount={2} />
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Buttons" bgTransparent>
            <Stack alignItems="center" spacing={3}>
              <Pagination count={10} showFirstButton showLastButton />
              <Pagination count={10} hidePrevButton hideNextButton />
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Table" bgTransparent>
            <Stack alignItems="center" spacing={3}>
              <TablePagination count={100} page={page} component="div" rowsPerPage={rowsPerPage} onPageChange={(_, page) => setPage(page)} onRowsPerPageChange={handleChangeRowsPerPage} />
            </Stack>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
}