import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar'; // CUSTOM COMPONENTS

import ListItem from './ListItem';
import ItemLayout from '../ItemLayout';
import { H6, Small } from '@/components/typography'; // CUSTOM ICON COMPONENT

import Link from '@/icons/Link'; // STYLED COMPONENTS

import { StyledStack } from './styles';
export default function FileItem() {
  return <ItemLayout Icon={<Link sx={{
    fontSize: 16
  }} />}>
      <H6 fontSize={14} mb={0.5}>
        Invitation for crafting engaging designs that speak human workshop
      </H6>

      <Stack mt={0.5} direction="row" alignItems="center" spacing={1}>
        <Small color="text.secondary">Added at 4.23 PM by</Small>
        <Avatar src="/static/user/user-9.png" sx={{
        width: 17,
        height: 17
      }} />
      </Stack>

      <StyledStack direction="row">
        <ListItem title="Finance KPI App" icon="/static/files-icon/pdf.svg" size={90} />
        <ListItem title="Css File Yoga App" icon="/static/files-icon/css.svg" size={90} />
        <ListItem title="All JPGS From Yoga App" icon="/static/files-icon/jpg.svg" size={90} />
      </StyledStack>
    </ItemLayout>;
}