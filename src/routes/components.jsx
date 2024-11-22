import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container'; // CUSTOM COMPONENTS

import Loadable from './Loadable';
import Footer from '@/layouts/root/Footer';
import Header from '@/layouts/root/Navigation'; // ALL MUI COMPONENT SHOWCASE PAGES

const Components = Loadable(lazy(() => import('@/pages/examples/components')));
const MuiChip = Loadable(lazy(() => import('@/pages/examples/mui/chip')));
const MuiList = Loadable(lazy(() => import('@/pages/examples/mui/list')));
const MuiMenu = Loadable(lazy(() => import('@/pages/examples/mui/menu')));
const MuiTabs = Loadable(lazy(() => import('@/pages/examples/mui/tabs')));
const MuiAlert = Loadable(lazy(() => import('@/pages/examples/mui/alert')));
const MuiBadge = Loadable(lazy(() => import('@/pages/examples/mui/badge')));
const MuiTable = Loadable(lazy(() => import('@/pages/examples/mui/table')));
const MuiRating = Loadable(lazy(() => import('@/pages/examples/mui/rating')));
const MuiSlider = Loadable(lazy(() => import('@/pages/examples/mui/slider')));
const MuiAvatar = Loadable(lazy(() => import('@/pages/examples/mui/avatar')));
const MuiDialog = Loadable(lazy(() => import('@/pages/examples/mui/dialog')));
const MuiSwitch = Loadable(lazy(() => import('@/pages/examples/mui/switch')));
const MuiTooltip = Loadable(lazy(() => import('@/pages/examples/mui/tooltip')));
const MuiButtons = Loadable(lazy(() => import('@/pages/examples/mui/buttons')));
const MuiPickers = Loadable(lazy(() => import('@/pages/examples/mui/pickers')));
const MuiPopover = Loadable(lazy(() => import('@/pages/examples/mui/popover')));
const MuiStepper = Loadable(lazy(() => import('@/pages/examples/mui/stepper')));
const MuiTimeline = Loadable(lazy(() => import('@/pages/examples/mui/timeline')));
const MuiSnackbar = Loadable(lazy(() => import('@/pages/examples/mui/snackbar')));
const MuiCheckbox = Loadable(lazy(() => import('@/pages/examples/mui/checkbox')));
const MuiProgress = Loadable(lazy(() => import('@/pages/examples/mui/progress')));
const MuiDataGrid = Loadable(lazy(() => import('@/pages/examples/mui/data-grid')));
const MuiTreeview = Loadable(lazy(() => import('@/pages/examples/mui/tree-view')));
const MuiAccordion = Loadable(lazy(() => import('@/pages/examples/mui/accordion')));
const MuiTextField = Loadable(lazy(() => import('@/pages/examples/mui/textfield')));
const MuiPagination = Loadable(lazy(() => import('@/pages/examples/mui/pagination')));
const MuiBreadcrumbs = Loadable(lazy(() => import('@/pages/examples/mui/breadcrumbs')));
const MuiRadioButton = Loadable(lazy(() => import('@/pages/examples/mui/radio-button')));
const MuiAutocomplete = Loadable(lazy(() => import('@/pages/examples/mui/autocomplete')));
const MuiTransferList = Loadable(lazy(() => import('@/pages/examples/mui/transfer-list')));
export const ComponentRoutes = [{
  path: 'components',
  element: <>
        {
      /* HEADER */
    }
        <Container maxWidth="lg">
          <Header />
        </Container>

        {
      /* MAIN CONTENT */
    }
        <Outlet />

        {
      /* FOOTER */
    }
        <Footer />
      </>,
  children: [{
    element: <Components />,
    index: true
  }, {
    path: 'accordion',
    element: <MuiAccordion />
  }, {
    path: 'alert',
    element: <MuiAlert />
  }, {
    path: 'autocomplete',
    element: <MuiAutocomplete />
  }, {
    path: 'avatar',
    element: <MuiAvatar />
  }, {
    path: 'badge',
    element: <MuiBadge />
  }, {
    path: 'breadcrumbs',
    element: <MuiBreadcrumbs />
  }, {
    path: 'buttons',
    element: <MuiButtons />
  }, {
    path: 'checkbox',
    element: <MuiCheckbox />
  }, {
    path: 'chip',
    element: <MuiChip />
  }, {
    path: 'data-grid',
    element: <MuiDataGrid />
  }, {
    path: 'dialog',
    element: <MuiDialog />
  }, {
    path: 'list',
    element: <MuiList />
  }, {
    path: 'menu',
    element: <MuiMenu />
  }, {
    path: 'pagination',
    element: <MuiPagination />
  }, {
    path: 'pickers',
    element: <MuiPickers />
  }, {
    path: 'popover',
    element: <MuiPopover />
  }, {
    path: 'progress',
    element: <MuiProgress />
  }, {
    path: 'radio-button',
    element: <MuiRadioButton />
  }, {
    path: 'rating',
    element: <MuiRating />
  }, {
    path: 'slider',
    element: <MuiSlider />
  }, {
    path: 'stepper',
    element: <MuiStepper />
  }, {
    path: 'switch',
    element: <MuiSwitch />
  }, {
    path: 'table',
    element: <MuiTable />
  }, {
    path: 'tabs',
    element: <MuiTabs />
  }, {
    path: 'textfield',
    element: <MuiTextField />
  }, {
    path: 'timeline',
    element: <MuiTimeline />
  }, {
    path: 'tooltip',
    element: <MuiTooltip />
  }, {
    path: 'transfer-list',
    element: <MuiTransferList />
  }, {
    path: 'tree-view',
    element: <MuiTreeview />
  }, {
    path: 'snackbar',
    element: <MuiSnackbar />
  }]
}];