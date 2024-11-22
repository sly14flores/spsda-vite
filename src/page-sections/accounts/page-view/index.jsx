import { Fragment, useState } from 'react'; // MUI

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
// CUSTOM COMPONENTS
import { H5 } from '@/components/typography';
import FlexBox from '@/components/flexbox/FlexBox'; // CUSTOM PAGE SECTION COMPONENTS

import TabComponent from '@/page-sections/accounts'; // CUSTOM ICON COMPONENTS

import Apps from '@/icons/Apps';
import Icons from '@/icons/account'; // STYLED COMPONENTS

import { StyledButton } from '../styles';
export default function AccountsPageView() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [active, setActive] = useState('Basic Information');
  const downMd = useMediaQuery(theme => theme.breakpoints.down('md')); // HANDLE LIST ITEM ON CLICK

  const handleListItemBtn = name => () => {
    setActive(name);
    setOpenDrawer(false);
  }; // SIDEBAR LIST CONTENT


  const TabListContent = <FlexBox flexDirection="column">
      {tabList.map(({
      id,
      name,
      Icon
    }) => <StyledButton key={id} variant="text" startIcon={<Icon />} active={active === name} onClick={handleListItemBtn(name)}>
          {name}
        </StyledButton>)}
    </FlexBox>;
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        <Grid size={{
        md: 3,
        xs: 12
      }}>
          {downMd ? <Fragment>
              <FlexBox alignItems="center" gap={1} onClick={() => setOpenDrawer(true)}>
                <IconButton sx={{
              padding: 0
            }}>
                  <Apps sx={{
                color: 'text.primary'
              }} />
                </IconButton>

                <H5 fontSize={16}>More</H5>
              </FlexBox>

              <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box padding={1}>{TabListContent}</Box>
              </Drawer>
            </Fragment> : <Card sx={{
          p: '1rem 0'
        }}>{TabListContent}</Card>}
        </Grid>

        <Grid size={{
        md: 9,
        xs: 12
      }}>
          {active === tabList[0].name && <TabComponent.BasicInformation />}
          {active === tabList[1].name && <TabComponent.Password />}
          {active === tabList[2].name && <TabComponent.Preferences />}
          {active === tabList[3].name && <TabComponent.RecentDevices />}
          {active === tabList[4].name && <TabComponent.Notifications />}
          {active === tabList[5].name && <TabComponent.TwoStepVerification />}
          {active === tabList[6].name && <TabComponent.ConnectedAccounts />}
          {active === tabList[7].name && <TabComponent.SocialAccounts />}
          {active === tabList[8].name && <TabComponent.Billing />}
          {active === tabList[9].name && <TabComponent.Statements />}
          {active === tabList[10].name && <TabComponent.Referrals />}
          {active === tabList[11].name && <TabComponent.ApiKeys />}
          {active === tabList[12].name && <TabComponent.DeleteAccount />}
        </Grid>
      </Grid>
    </div>;
}
const tabList = [{
  id: 1,
  name: 'Basic Information',
  Icon: Icons.UserOutlined
}, {
  id: 2,
  name: 'Password',
  Icon: Icons.LockOutlined
}, {
  id: 3,
  name: 'Preferences',
  Icon: Icons.SettingsOutlined
}, {
  id: 4,
  name: 'Recent Devices',
  Icon: Icons.DevicesApple
}, {
  id: 5,
  name: 'Notifications',
  Icon: Icons.NotificationOutlined
}, {
  id: 6,
  name: 'Two-step verification',
  Icon: Icons.Fingerprint
}, {
  id: 7,
  name: 'Connected accounts',
  Icon: Icons.Link
}, {
  id: 8,
  name: 'Social Account',
  Icon: Icons.Instagram
}, {
  id: 9,
  name: 'Billing',
  Icon: Icons.DollarOutlined
}, {
  id: 10,
  name: 'Statements',
  Icon: Icons.FileOutlined
}, {
  id: 11,
  name: 'Referrals',
  Icon: Icons.PremiumOutlined
}, {
  id: 12,
  name: 'API Keys',
  Icon: Icons.Key
}, {
  id: 13,
  name: 'Delete account',
  Icon: Icons.DeleteOutlined
}];