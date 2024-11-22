import { useLocation, useNavigate } from 'react-router-dom'; // MUI

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
// MUI ICON COMPONENTS
import Create from '@mui/icons-material/Create'; // CUSTOM COMPONENTS

import ListItem from '../list-item';
import { Paragraph } from '@/components/typography'; // CUSTOM DUMMY DATA SET

import { LABELS, LIST_ITEMS } from './data'; // ==============================================================

// ==============================================================
export default function MailSidebar({
  openSidebar,
  onClose
}) {
  const navigate = useNavigate();
  const {
    pathname
  } = useLocation();
  const downMd = useMediaQuery(theme => theme.breakpoints.down('md'));

  const handleNavigate = url => () => navigate(url); // SIDEBAR NAVIGATION CONTENT


  const CONTENT = <>
      <Button fullWidth startIcon={<Create />} onClick={handleNavigate('/dashboard/mail/compose')}>
        Compose
      </Button>

      <Box display="flex" flexDirection="column" mt={4}>
        {LIST_ITEMS.map(({
        Icon,
        id,
        title,
        value,
        url
      }) => <ListItem key={id} title={title} value={value} active={url === pathname} handleChange={handleNavigate(url)} Icon={<Icon sx={{
        fontSize: 18
      }} />} />)}
      </Box>

      <Paragraph fontWeight={600} mt={4} mb={1}>
        Labels
      </Paragraph>

      <Box display="flex" flexDirection="column">
        {LABELS.map(({
        id,
        title,
        value,
        color
      }) => <ListItem key={id} title={title} value={value} active={false} handleChange={() => {}} Icon={<Box sx={{
        mr: 1,
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: color
      }} />} />)}
      </Box>
    </>; // FOR SMALLER DEVICES

  if (downMd) {
    return <Drawer anchor="left" onClose={onClose} open={openSidebar} PaperProps={{
      sx: {
        width: 280,
        p: 3
      }
    }}>
        {CONTENT}
      </Drawer>;
  }

  return <Box p={3} width={260} flexShrink={0} borderRight="1px solid" borderColor="divider">
      {CONTENT}
    </Box>;
}