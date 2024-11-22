import Grid from '@mui/material/Grid2';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem'; // MUI ICON COMPONENTS

import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRight from '@mui/icons-material/ChevronRight'; // CUSTOM COMPONENTS

import Block from '@/components/block';
import ComponentPageLayout from '../../ComponentPageLayout';
export default function MuiTreeViewPageView() {
  return <ComponentPageLayout title="Tree View" fullLink="https://mui.com/x/react-tree-view/getting-started">
      <Grid container spacing={3}>
        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <Block title="Basic">
            <SimpleTreeView aria-label="file system navigator" sx={{
            height: 200,
            flexGrow: 1,
            maxWidth: 400,
            overflowY: 'auto'
          }} slotProps={{
            collapseIcon: <ExpandMore />,
            expandIcon: <ChevronRight />
          }}>
              <TreeItem itemId="1" label="Components">
                <TreeItem itemId="2" label="Mui">
                  <TreeItem itemId="3" label="Alert" />
                  <TreeItem itemId="4" label="Avatar" />
                  <TreeItem itemId="5" label="Button" />
                </TreeItem>

                <TreeItem itemId="6" label="Flexbox">
                  <TreeItem itemId="7" label="Flex Between" />
                  <TreeItem itemId="8" label="Flex Center" />
                </TreeItem>
              </TreeItem>

              <TreeItem itemId="9" label="Documents">
                <TreeItem itemId="10" label="OSS" />

                <TreeItem itemId="11" label="MUI">
                  <TreeItem itemId="12" label="index.js" />
                </TreeItem>
              </TreeItem>
            </SimpleTreeView>
          </Block>
        </Grid>

        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <Block title="Multi Select">
            <SimpleTreeView multiSelect aria-label="multi-select" sx={{
            height: 200,
            flexGrow: 1,
            maxWidth: 400,
            overflowY: 'auto'
          }} slotProps={{
            collapseIcon: <ExpandMore />,
            expandIcon: <ChevronRight />
          }}>
              <TreeItem itemId="1" label="Components">
                <TreeItem itemId="2" label="Mui">
                  <TreeItem itemId="3" label="Alert" />
                  <TreeItem itemId="4" label="Avatar" />
                  <TreeItem itemId="5" label="Button" />
                </TreeItem>

                <TreeItem itemId="6" label="Flexbox">
                  <TreeItem itemId="7" label="Flex Between" />
                  <TreeItem itemId="8" label="Flex Center" />
                </TreeItem>
              </TreeItem>

              <TreeItem itemId="9" label="Documents">
                <TreeItem itemId="10" label="OSS" />

                <TreeItem itemId="11" label="MUI">
                  <TreeItem itemId="12" label="index.js" />
                </TreeItem>
              </TreeItem>
            </SimpleTreeView>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
}