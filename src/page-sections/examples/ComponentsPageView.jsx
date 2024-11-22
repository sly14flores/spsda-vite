import { Fragment } from 'react'; // MUI

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import { H1, H5, Paragraph } from '@/components/typography';
import ComponentPreviewCard from './ComponentPreviewCard';
export default function ComponentsPageView() {
  return <Fragment>
      <Container sx={{
      py: {
        sm: 10,
        xs: 5
      }
    }}>
        <H1 fontSize={32}>Components</H1>
        <Paragraph color="text.secondary" fontSize={18} mt={0.6} maxWidth={{
        sm: 500
      }}>
          Vast collection of components that will cover all your needs from simple to complex UI.
        </Paragraph>
      </Container>

      <Divider />

      <Container sx={{
      py: {
        sm: 10,
        xs: 5
      }
    }}>
        <Box mb={5}>
          <H5 fontSize={20}>MUI</H5>
          <Paragraph color="text.secondary" mt={1}>
            Customised components from{' '}
            <Link href="https://mui.com/components" target="_blank">
              Material UI
            </Link>
            .
          </Paragraph>
        </Box>

        <Grid container spacing={3}>
          {componentList.map((component, i) => <Grid size={{
          md: 3,
          sm: 4,
          xs: 6
        }} key={i}>
              <ComponentPreviewCard link={component.link} title={component.title} image={component.image} />
            </Grid>)}
        </Grid>
      </Container>

      <Divider />
    </Fragment>;
}
const componentList = [{
  id: 1,
  title: 'Accordion',
  link: '/components/accordion',
  image: '/static/components/accordion.png'
}, {
  id: 2,
  title: 'Alert',
  link: '/components/alert',
  image: '/static/components/alert.png'
}, {
  id: 3,
  title: 'Autocomplete',
  link: '/components/autocomplete',
  image: '/static/components/autocomplete.png'
}, {
  id: 4,
  title: 'Avatar',
  link: '/components/avatar',
  image: '/static/components/avatar.png'
}, {
  id: 5,
  title: 'Badge',
  link: '/components/badge',
  image: '/static/components/badge.png'
}, {
  id: 6,
  title: 'Breadcrumbs',
  link: '/components/breadcrumbs',
  image: '/static/components/breadcrumbs.png'
}, {
  id: 7,
  title: 'Buttons',
  link: '/components/buttons',
  image: '/static/components/buttons.png'
}, {
  id: 8,
  title: 'Checkbox',
  link: '/components/checkbox',
  image: '/static/components/checkbox.png'
}, {
  id: 9,
  title: 'Chip',
  link: '/components/chip',
  image: '/static/components/chip.png'
}, {
  id: 10,
  title: 'Data Grid',
  link: '/components/data-grid',
  image: '/static/components/data-grid.png'
}, {
  id: 11,
  title: 'Dialog',
  link: '/components/dialog',
  image: '/static/components/dialog.png'
}, {
  id: 12,
  title: 'List',
  link: '/components/list',
  image: '/static/components/list.png'
}, {
  id: 13,
  title: 'Menu',
  link: '/components/menu',
  image: '/static/components/menu.png'
}, {
  id: 14,
  title: 'Pagination',
  link: '/components/pagination',
  image: '/static/components/pagination.png'
}, {
  id: 15,
  title: 'Pickers',
  link: '/components/pickers',
  image: '/static/components/pickers.png'
}, {
  id: 16,
  title: 'Popover',
  link: '/components/popover',
  image: '/static/components/popover.png'
}, {
  id: 17,
  title: 'Progress',
  link: '/components/progress',
  image: '/static/components/progress.png'
}, {
  id: 18,
  title: 'Radio Button',
  link: '/components/radio-button',
  image: '/static/components/radio-button.png'
}, {
  id: 19,
  title: 'Rating',
  link: '/components/rating',
  image: '/static/components/rating.png'
}, {
  id: 20,
  title: 'Slider',
  link: '/components/slider',
  image: '/static/components/slider.png'
}, {
  id: 30,
  title: 'Snackbar',
  link: '/components/snackbar',
  image: '/static/components/tree-view.png'
}, {
  id: 21,
  title: 'Stepper',
  link: '/components/stepper',
  image: '/static/components/stepper.png'
}, {
  id: 22,
  title: 'Switch',
  link: '/components/switch',
  image: '/static/components/switch.png'
}, {
  id: 23,
  title: 'Table',
  link: '/components/table',
  image: '/static/components/table.png'
}, {
  id: 24,
  title: 'Tabs',
  link: '/components/tabs',
  image: '/static/components/tabs.png'
}, {
  id: 25,
  title: 'Textfield',
  link: '/components/textfield',
  image: '/static/components/textfield.png'
}, {
  id: 26,
  title: 'Timeline',
  link: '/components/timeline',
  image: '/static/components/timeline.png'
}, {
  id: 27,
  title: 'Tooltip',
  link: '/components/tooltip',
  image: '/static/components/tooltip.png'
}, {
  id: 28,
  title: 'Transfer List',
  link: '/components/transfer-list',
  image: '/static/components/transfer-list.png'
}, {
  id: 29,
  title: 'Tree View',
  link: '/components/tree-view',
  image: '/static/components/tree-view.png'
}];