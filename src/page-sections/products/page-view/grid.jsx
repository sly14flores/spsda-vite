import { useState } from 'react'; // MUI

import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import Link from '@/components/link/Link';
import { H6 } from '@/components/typography';
import IconWrapper from '@/components/icon-wrapper';
import ProductCard from '@/components/product-cards/product-card-1';
import { FlexBetween, FlexBox, FlexRowAlign } from '@/components/flexbox';
import SearchArea from '@/page-sections/users/SearchArea'; // CUSTOM ICON COMPONENTS

import Add from '@/icons/Add';
import ShoppingBasket from '@/icons/ShoppingBasket'; // CUSTOM DUMMY DATA

import { PRODUCTS } from '@/__fakeData__/products'; // STYLED COMPONENT

const HeadingWrapper = styled(FlexBetween)(({
  theme
}) => ({
  gap: 8,
  flexWrap: 'wrap',
  [theme.breakpoints.down(453)]: {
    '& .MuiButton-root': {
      order: 2
    },
    '& .MuiTabs-root': {
      order: 3,
      width: '100%',
      '& .MuiTabs-flexContainer': {
        justifyContent: 'space-between'
      }
    }
  }
}));
export default function ProductGridPageView() {
  const [pageSize] = useState(8);
  const [pageIndex, setPageIndex] = useState(1);
  const [selectTab, setSelectTab] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState([...PRODUCTS]);

  const handleChangeTab = (_, newTab) => setSelectTab(newTab);

  const FILTER_PRODUCTS = products.slice(0, pageSize * pageIndex).filter(item => {
    if (selectTab === 'stock') return item.stock > 0;
    if (selectTab === 'out-of-stock') return item.stock === 0;
    return true;
  }).filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));

  const handleDeleteProduct = id => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(state => state.filter(item => item.id !== id));
    }
  };

  return <div className="pt-2 pb-4">
      <TabContext value={selectTab}>
        <HeadingWrapper>
          <FlexBox gap={0.5} alignItems="center">
            <IconWrapper>
              <ShoppingBasket color="primary" />
            </IconWrapper>

            <H6 fontSize={16}>Products</H6>
          </FlexBox>

          <TabList onChange={handleChangeTab}>
            <Tab disableRipple label="All" value="" />
            <Tab disableRipple label="In Stock" value="stock" />
            <Tab disableRipple label="Out of Stock" value="out-of-stock" />
          </TabList>

          <Button variant="contained" startIcon={<Add />} LinkComponent={Link} href="/dashboard/create-product">
            Add Product
          </Button>
        </HeadingWrapper>

        <SearchArea value={searchValue} gridRoute="/dashboard/product-grid" listRoute="/dashboard/product-list" onChange={e => setSearchValue(e.target.value)} />

        <Grid container spacing={3}>
          {
          /* PRODUCT CARD LIST */
        }
          {FILTER_PRODUCTS.map(item => <Grid size={{
          md: 3,
          sm: 6,
          xs: 12
        }} key={item.id}>
              <ProductCard product={item} handleDelete={handleDeleteProduct} />
            </Grid>)}

          {
          /* NOT FOUND PRODUCT VIEW */
        }
          {FILTER_PRODUCTS.length === 0 ? <Grid size={12}>
              <FlexRowAlign fontSize={18} minHeight={300} fontWeight={700} borderRadius={2} bgcolor="action.selected">
                Data Not Found!
              </FlexRowAlign>
            </Grid> : null}

          {
          /* LOAD MORE BUTTON */
        }
          {FILTER_PRODUCTS.length !== 0 && products.length > FILTER_PRODUCTS.length ? <Grid size={12}>
              <FlexRowAlign mt={2}>
                <Button onClick={() => setPageIndex(state => state + 1)}>
                  Load More Products
                </Button>
              </FlexRowAlign>
            </Grid> : null}
        </Grid>
      </TabContext>
    </div>;
}