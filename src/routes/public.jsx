import { lazy } from 'react';
import { Outlet } from 'react-router-dom'; // CUSTOM COMPONENTS

import Loadable from './Loadable';
import RootLayout from '@/layouts/root/RootLayout'; // ROLE BASED PERMISSION TEST PAGE

const Permission = Loadable(lazy(() => import('@/pages/permission'))); // FEATURES RELATED PAGES

const Faqs = Loadable(lazy(() => import('@/pages/faq')));
const Cart = Loadable(lazy(() => import('@/pages/cart')));
const Pricing = Loadable(lazy(() => import('@/pages/pricing')));
const Checkout = Loadable(lazy(() => import('@/pages/checkout')));
const ContactUs = Loadable(lazy(() => import('@/pages/contact-us')));
const ComingSoon = Loadable(lazy(() => import('@/pages/coming-soon')));
const Maintenance = Loadable(lazy(() => import('@/pages/maintenance')));
const CareerApply = Loadable(lazy(() => import('@/pages/career/apply')));
const CareerTwo = Loadable(lazy(() => import('@/pages/career/career-2')));
const CareerDetails = Loadable(lazy(() => import('@/pages/career/details')));
const AboutUsOne = Loadable(lazy(() => import('@/pages/about-us/about-us-1')));
const Products = Loadable(lazy(() => import('@/pages/shops/products')));
const ProductDetails = Loadable(lazy(() => import('@/pages/shops/product-details')));
export const PublicRoutes = [{
  path: 'permission',
  element: <Permission />
}, {
  path: 'maintenance',
  element: <Maintenance />
}, {
  path: 'coming-soon',
  element: <ComingSoon />
}, {
  element: <RootLayout>
        <Outlet />
      </RootLayout>,
  children: [{
    path: 'about-us',
    element: <AboutUsOne />
  }, {
    path: 'contact-us',
    element: <ContactUs />
  }, {
    path: 'faqs',
    element: <Faqs />
  }, {
    path: 'pricing',
    element: <Pricing />
  }, {
    path: 'cart',
    element: <Cart />
  }, {
    path: 'checkout',
    element: <Checkout />
  }, {
    path: 'career',
    children: [{
      index: true,
      element: <CareerTwo />
    }, {
      path: ':slug',
      element: <CareerDetails />
    }, {
      path: 'apply',
      element: <CareerApply />
    }]
  }, {
    path: 'products',
    children: [{
      index: true,
      element: <Products />
    }, {
      path: ':id',
      element: <ProductDetails />
    }]
  }]
}];