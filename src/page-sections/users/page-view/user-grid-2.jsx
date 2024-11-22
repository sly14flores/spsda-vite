import { useState } from 'react'; // MUI

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween'; // CUSTOM PAGE SECTION COMPONENTS

import SearchArea from '../SearchArea';
import UserDetails from '../UserDetails'; // CUSTOM ICON COMPONENT

import MoreVertical from '@/icons/MoreVertical'; // CUSTOM UTILS METHOD

import { paginate } from '@/utils/paginate'; // CUSTOM DUMMY DATA

import { USER_LIST } from '@/__fakeData__/users';
export default function UserGrid2PageView() {
  const [userPerPage] = useState(21);
  const [page, setPage] = useState(1);
  const [users] = useState([...USER_LIST]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(USER_LIST[1]); // handle select

  const handleSelectItem = id => setSelectedItem(USER_LIST[id]); // active select item


  const activeItem = id => selectedItem.id === id;

  const filteredUsers = users.filter(item => {
    if (searchValue) return item.name.toLowerCase().includes(searchValue.toLowerCase());else return true;
  });
  return <div className="pt-2 pb-4">
      <Grid container>
        <Grid size={{
        lg: 9,
        md: 8,
        xs: 12
      }}>
          <Card sx={{
          px: 3,
          height: '100%',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        }}>
            <SearchArea value={searchValue} onChange={e => setSearchValue(e.target.value)} gridRoute="/dashboard/user-grid-2" listRoute="/dashboard/user-list-2" />

            <Grid container spacing={3}>
              {paginate(page, userPerPage, filteredUsers).map((item, index) => <Grid size={{
              lg: 4,
              sm: 6,
              xs: 12
            }} key={index}>
                  <Box onClick={() => handleSelectItem(index)} sx={{
                padding: 2,
                height: '100%',
                borderRadius: 2,
                cursor: 'pointer',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.4s',
                backgroundColor: activeItem(item.id) ? 'primary.main' : 'transparent'
              }}>
                    <FlexBetween height="100%">
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar src={item.avatar} sx={{
                      borderRadius: '20%'
                    }} />

                        <div>
                          <H6 fontSize={14} color={activeItem(item.id) ? 'white' : 'text.primary'}>
                            {item.name}
                          </H6>

                          <Paragraph color={activeItem(item.id) ? 'white' : 'text.secondary'}>
                            {item.position}
                          </Paragraph>
                        </div>
                      </Stack>

                      <IconButton disableRipple sx={{
                    padding: 0
                  }}>
                        <MoreVertical fontSize="small" sx={{
                      color: activeItem(item.id) ? 'white' : 'text.secondary'
                    }} />
                      </IconButton>
                    </FlexBetween>
                  </Box>
                </Grid>)}

              <Grid size={12}>
                <Stack alignItems="center" marginY={2}>
                  <Pagination shape="rounded" count={Math.ceil(filteredUsers.length / userPerPage)} onChange={(_, newPage) => setPage(newPage)} />
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid size={{
        lg: 3,
        md: 4,
        xs: 12
      }}>
          <UserDetails data={selectedItem} />
        </Grid>
      </Grid>
    </div>;
}