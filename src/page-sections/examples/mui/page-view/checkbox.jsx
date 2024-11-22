import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'; // MUI ICON COMPONENTS

import Favorite from '@mui/icons-material/Favorite';
import Bookmark from '@mui/icons-material/Bookmark';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder'; // CUSTOM COMPONENTS

import Block from '@/components/block';
import ComponentPageLayout from '../../ComponentPageLayout';
export default function MuiCheckboxPageView() {
  return <ComponentPageLayout title="Checkbox">
      <Block title="Basic">
        <Checkbox />
        <Checkbox defaultChecked />
        <Checkbox defaultChecked indeterminate />
        <Checkbox disabled />
        <Checkbox disabled defaultChecked />
        <Checkbox disabled defaultChecked indeterminate />
      </Block>

      <Block title="Colors">
        <Checkbox defaultChecked />
        <Checkbox defaultChecked color="secondary" />
        <Checkbox defaultChecked color="success" />
        <Checkbox defaultChecked color="warning" />
        <Checkbox defaultChecked color="error" />
        <Checkbox defaultChecked color="info" />
        <Checkbox defaultChecked color="default" />
      </Block>

      <Block title="Label">
        <FormControlLabel control={<Checkbox defaultChecked />} label="Primary" />
        <FormControlLabel label="Secondary" control={<Checkbox color="secondary" defaultChecked />} />
        <FormControlLabel control={<Checkbox color="success" defaultChecked />} label="Success" />
        <FormControlLabel control={<Checkbox color="warning" defaultChecked />} label="Warning" />
      </Block>

      <Block title="Sizes & Custom Icon">
        <Checkbox size="small" defaultChecked />
        <Checkbox size="medium" defaultChecked />
        <Checkbox defaultChecked icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <Checkbox defaultChecked icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
      </Block>
    </ComponentPageLayout>;
}