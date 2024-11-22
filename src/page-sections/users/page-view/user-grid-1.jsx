import { useState } from 'react'; // MUI

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination'; // CUSTOM COMPONENTS

import { FlexBetween } from '@/components/flexbox';
import { Paragraph, Small } from '@/components/typography'; // CUSTOM PAGE SECTION COMPONENTS

import SearchArea from '../SearchArea';
import HeadingArea from '../HeadingArea'; // CUSTOM ICON COMPONENTS

import Chat from '@/icons/Chat';
import Email from '@/icons/Email';
import UserBigIcon from '@/icons/UserBigIcon';
import MoreHorizontal from '@/icons/MoreHorizontal'; // CUSTOM UTILS METHOD

import { paginate } from '@/utils/paginate'; // CUSTOM DUMMY DATA

import { USER_LIST } from '@/__fakeData__/users';
export default function UserGrid1PageView() {
  const [userPerPage] = useState(8);
  const [page, setPage] = useState(1);
  const [users] = useState([...USER_LIST]);
  const [userFilter, setUserFilter] = useState({
    role: '',
    search: ''
  });

  const handleChangeFilter = (key, value) => {
    setUserFilter(state => ({ ...state,
      [key]: value
    }));
  }; // handle change for tab list


  const changeTab = (_, newValue) => {
    handleChangeFilter('role', newValue);
  };

  const filteredUsers = users.filter(item => {
    if (userFilter.role) return item.role.toLowerCase() === userFilter.role;else if (userFilter.search) return item.name.toLowerCase().includes(userFilter.search.toLowerCase());else return true;
  });
  const iconStyle = {
    color: 'grey.500',
    fontSize: 18
  };
  return <div className="pt-2 pb-4">
      <Card sx={{
      px: 3,
      py: 2
    }}>
        <HeadingArea value={userFilter.role} changeTab={changeTab} />

        <SearchArea value={userFilter.search} onChange={e => handleChangeFilter('search', e.target.value)} gridRoute="/dashboard/user-grid" listRoute="/dashboard/user-list" />

        <Grid container spacing={3}>
          {paginate(page, userPerPage, filteredUsers).map((item, index) => <Grid size={{
          lg: 3,
          md: 4,
          sm: 6,
          xs: 12
        }} key={index}>
              <Box sx={{
            p: 3,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider'
          }}>
                <FlexBetween mx={-1} mt={-1}>
                  <Checkbox size="small" />

                  <IconButton>
                    <MoreHorizontal sx={iconStyle} />
                  </IconButton>
                </FlexBetween>

                <Stack direction="row" alignItems="center" py={2} spacing={2}>
                  <Avatar src={item.avatar} sx={{
                borderRadius: '20%'
              }} />

                  <div>
                    <Paragraph fontWeight={500}>{item.name}</Paragraph>
                    <Small color="grey.500">{item.username}</Small>
                  </div>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <Email sx={iconStyle} />
                  <Small color="grey.500">{item.email}</Small>
                </Stack>

                <Stack direction="row" alignItems="center" mt={1} spacing={1}>
                  <UserBigIcon sx={iconStyle} />
                  <Small color="grey.500">Status: {item.role}</Small>
                </Stack>

                <Stack direction="row" alignItems="center" mt={1} spacing={1}>
                  <Chat sx={iconStyle} />
                  <Small color="grey.500">Posts: 12</Small>
                </Stack>
              </Box>
            </Grid>)}

          <Grid size={12}>
            <Stack alignItems="center" py={2}>
              <Pagination shape="rounded" count={Math.ceil(filteredUsers.length / userPerPage)} onChange={(_, newPage) => setPage(newPage)} />
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </div>;
}