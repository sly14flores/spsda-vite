import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container'; // CUSTOM COMPONENTS

import { H6 } from '@/components/typography';
import ProductCard from '@/components/product-cards/product-card-2'; // DATA

import { PRODUCTS } from '@/__fakeData__/products';
export default function Section4() {
  return <div className="py-12">
      <Container maxWidth="lg">
        <H6 fontSize={24} mb={3}>
          You may also like
        </H6>

        <Grid container spacing={3}>
          {PRODUCTS.slice(0, 6).map(product => <Grid size={{
          md: 4,
          sm: 6,
          xs: 12
        }} key={product.id}>
              <ProductCard id={product.id} name={product.name} price={product.price} image={product.image} />
            </Grid>)}
        </Grid>
      </Container>
    </div>;
}