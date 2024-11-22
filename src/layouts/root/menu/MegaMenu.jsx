import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card'; // CUSTOM COMPONENTS

import MegaMenuList from './MegaMenuList';
import { Span } from '@/components/typography';
import FlexBox from '@/components/flexbox/FlexBox'; // CUSTOM ICON COMPONENT

import ChevronDown from '@/icons/ChevronDown'; // PAGES NAVIGATION

import { PAGES_MENUS } from './navigation'; // STYLED COMPONENTS

import { MainListItem, MenusContainer } from './styles'; // ==============================================================

// ==============================================================
export default function MegaMenu({
  isDark
}) {
  return <MainListItem>
      <FlexBox alignItems="center" className="menu-item" color={isDark ? 'text.primary' : 'white'} sx={{
      cursor: 'pointer'
    }}>
        <Span>Pages</Span> <ChevronDown sx={{
        fontSize: 19,
        ml: 0.3
      }} />
      </FlexBox>

      <MenusContainer className="inner-menu">
        <Card sx={{
        px: 3,
        py: 4,
        mt: 1.5,
        width: '100%'
      }}>
          <Grid container spacing={3}>
            {PAGES_MENUS.map(({
            id,
            title,
            child
          }) => <Grid size={4} key={id}>
                <MegaMenuList title={title} child={child} />
              </Grid>)}
          </Grid>
        </Card>
      </MenusContainer>
    </MainListItem>;
}