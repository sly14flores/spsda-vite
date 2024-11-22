import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar'; // CUSTOM COMPONENT

import ItemLayout from '../ItemLayout';
import { H6, Small } from '@/components/typography'; // CUSTOM ICON COMPONENT

import Edit from '@/icons/Edit'; // STYLED COMPONENT

import { ImageGroup } from './styles';
export default function EditItem() {
  return <ItemLayout Icon={<Edit sx={{
    fontSize: 16
  }} />}>
      <H6 fontSize={14} mb={0.5}>
        3 new application design concepts added:
      </H6>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Small color="text.secondary">Created at 4.30 by</Small>
        <Avatar src="/static/user/user-10.png" sx={{
        width: 17,
        height: 17
      }} />
      </Stack>

      <ImageGroup spacing={2} direction="row">
        <div className="img-box">
          <img src="/static/post/1.png" width="100%" alt="Post" />
        </div>

        <div className="img-box">
          <img src="/static/post/2.png" width="100%" alt="Post" />
        </div>

        <div className="img-box">
          <img src="/static/post/3.png" width="100%" alt="Post" />
        </div>
      </ImageGroup>
    </ItemLayout>;
}