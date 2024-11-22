import { useState } from 'react'; // LODASH

import isEqual from 'lodash/isEqual';
import shuffle from 'lodash/shuffle'; // MUI

import Grid from '@mui/material/Grid2'; // CUSTOM COMPONENTS

import FilterActions from './filter-actions';
import ProductFilterSidebar from './product-filter-sidebar';
import ProductCard from '@/components/product-cards/product-card-2'; // DATA

import { PRODUCTS } from '@/__fakeData__/products'; // TYPE

const defaultFilters = {
  gender: [],
  category: [],
  color: [],
  price: [0, 200],
  rating: 0
};
export default function Section2() {
  const [sortBy, setSortBy] = useState('featured');
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [filters, setIsFilters] = useState(defaultFilters);

  const handleChangeFilters = (key, values) => {
    setIsFilters(prev => ({ ...prev,
      [key]: values
    }));
  };

  const handleClearFilters = () => {
    setIsFilters({ ...defaultFilters
    });
  };

  const hasFilterApplied = isEqual(defaultFilters, filters);

  const filteredProducts = () => {
    let products = [...PRODUCTS];

    if (filters.gender.length > 0) {
      products = shuffle(PRODUCTS);
    }

    const minPrice = filters.price[0];
    const maxPrice = filters.price[1];

    if (minPrice !== 0 || maxPrice !== 200) {
      products = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    if (filters.rating > 0) {
      // products = products.filter((product) => product.rating >= filters.rating)
      products = shuffle(PRODUCTS);
    }

    if (filters.category.length > 0) {
      // products = products.filter((product) => filters.category.includes(product.category))
      products = shuffle(PRODUCTS);
    }

    if (filters.color.length > 0) {
      // products = products.filter((product) =>
      //   product.colors.some((color) => filters.color.includes(color))
      // )
      products = shuffle(PRODUCTS);
    }

    if (sortBy !== 'featured') {
      products = shuffle(PRODUCTS);
    }

    return products;
  };

  return <div className="py-10">
      <FilterActions sortBy={sortBy} handleSidebar={() => setIsOpenFilter(true)} onSortByChange={value => setSortBy(value)} />

      <ProductFilterSidebar filters={filters} open={isOpenFilter} filterApplied={hasFilterApplied} handleClear={handleClearFilters} onChangeFilters={handleChangeFilters} handleClose={() => setIsOpenFilter(false)} />

      <Grid container spacing={3}>
        {filteredProducts().map(product => <Grid size={{
        md: 4,
        sm: 6,
        xs: 12
      }} key={product.id}>
            <ProductCard id={product.id} name={product.name} price={product.price} image={product.image} />
          </Grid>)}
      </Grid>
    </div>;
}