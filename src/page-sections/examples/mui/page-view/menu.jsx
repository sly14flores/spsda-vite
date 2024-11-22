import { useState } from 'react'; // MUI ICON COMPONENTS

import Cloud from '@mui/icons-material/Cloud';
import MoreVert from '@mui/icons-material/MoreVert';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste'; // MUI

import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton'; // CUSTOM COMPONENTS

import Block from '@/components/block';
import Scrollbar from '@/components/scrollbar';
import { Paragraph } from '@/components/typography';
import ComponentPageLayout from '../../ComponentPageLayout';
const options = ['Show some love to MUI', 'Show all notification content', 'Hide sensitive notification content', 'Hide all notification content'];
const options2 = ['None', 'Atria', 'Callisto', 'Dione', 'Ganymede', 'Hangouts Call', 'Luna', 'Oberon', 'Phobos', 'Pyxis', 'Sedna', 'Titania', 'Triton', 'Umbriel'];
export default function MuiMenuPageView() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setAnchorEl(null);

  const handleClick = event => setAnchorEl(event.currentTarget); // icon menu list


  const [iconMenuEl, setIconMenuEl] = useState(null);

  const handleIconMenuClose = () => setIconMenuEl(null);

  const handleIconMenuClick = event => setIconMenuEl(event.currentTarget); // selected menu


  const [selectedIndex, setSelectedIndex] = useState(1);
  const [selectedMenuEl, setSelectedMenuEl] = useState(null);

  const handleSelectedMenuClose = () => setSelectedMenuEl(null);

  const handleClickListItem = event => {
    setSelectedMenuEl(event.currentTarget);
  };

  const handleMenuItemClick = index => {
    setSelectedIndex(index);
    setSelectedMenuEl(null);
  }; // max height menu


  const [maxMenuEl, setMaxMenuEl] = useState(null);

  const handleMaxMenuClose = () => setMaxMenuEl(null);

  const handleMaxMenuClick = event => {
    setMaxMenuEl(event.currentTarget);
  };

  return <ComponentPageLayout title="Menu">
      <Grid container spacing={3}>
        <Grid size={{
        md: 4,
        sm: 6,
        xs: 12
      }}>
          <Block title="Basic">
            <Button variant="text" id="basic-button" onClick={handleClick}>
              Dashboard
            </Button>

            <Menu id="basic-menu" anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Block>
        </Grid>

        <Grid size={{
        md: 4,
        sm: 6,
        xs: 12
      }}>
          <Block title="Icon Menu">
            <Button variant="text" id="icon-button" onClick={handleIconMenuClick}>
              Dashboard
            </Button>

            <Menu id="icon-menu" anchorEl={iconMenuEl} open={Boolean(iconMenuEl)} onClose={handleIconMenuClose}>
              <MenuList disablePadding disableListWrap>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>

                  <ListItemText>Cut</ListItemText>

                  <Paragraph color="text.secondary">⌘X</Paragraph>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                  <Paragraph color="text.secondary">⌘C</Paragraph>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                  <Paragraph color="text.secondary">⌘V</Paragraph>
                </MenuItem>

                <Divider />

                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Web Clipboard</ListItemText>
                </MenuItem>
              </MenuList>
            </Menu>
          </Block>
        </Grid>

        <Grid size={{
        md: 4,
        sm: 6,
        xs: 12
      }}>
          <Block title="Selected Menu">
            <List component="nav" aria-label="Device settings">
              <ListItemButton onClick={handleClickListItem}>
                <ListItemText primary="When device is locked" secondary={options[selectedIndex]} />
              </ListItemButton>
            </List>

            <Menu id="lock-menu" anchorEl={selectedMenuEl} open={Boolean(selectedMenuEl)} onClose={handleSelectedMenuClose}>
              {options.map((option, index) => <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={() => handleMenuItemClick(index)}>
                  {option}
                </MenuItem>)}
            </Menu>
          </Block>
        </Grid>

        <Grid size={{
        md: 4,
        sm: 6,
        xs: 12
      }}>
          <Block title="Max Height">
            <IconButton onClick={handleMaxMenuClick}>
              <MoreVert />
            </IconButton>

            <Menu anchorEl={maxMenuEl} open={Boolean(maxMenuEl)} onClose={handleMaxMenuClose}>
              <Scrollbar sx={{
              maxHeight: 200,
              width: '20ch'
            }}>
                {options2.map(option => <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleMaxMenuClose}>
                    {option}
                  </MenuItem>)}
              </Scrollbar>
            </Menu>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
}