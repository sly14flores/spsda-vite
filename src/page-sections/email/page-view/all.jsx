import { useNavigate } from 'react-router-dom'; // MUI

import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
// MUI ICON COMPONENT
import StarBorder from '@mui/icons-material/StarBorder'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph, Small } from '@/components/typography'; // CUSTOM LAYOUT COMPONENT

import Layout from '../Layout'; // CUSTOM ICON COMPONENTS

import Trash from '@/icons/duotone/Trash';
import Archive from '@/icons/duotone/Archive';
import UnreadMail from '@/icons/duotone/UnreadMail'; // STYLED COMPONENTS

import { MailActionWrapper, MailItem } from '../styles';
export default function AllMailPageView() {
  const navigate = useNavigate();
  const upSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  return <Layout>
      {
      /* MAIL LIST  */
    }
      {Array.from({
      length: 10
    }).map((item, i) => <MailItem key={i} onClick={() => navigate('/dashboard/mail/details')}>
          <FlexBox alignItems="center" gap={2}>
            {upSm && <Checkbox size="small" sx={{
          p: 0
        }} />}

            {upSm && <Tooltip title="Starred">
                <IconButton size="small" sx={{
            p: 0
          }}>
                  <StarBorder />
                </IconButton>
              </Tooltip>}

            <Avatar src="/static/user/user-11.png" sx={{
          width: 25,
          height: 25
        }} />

            {upSm && <Paragraph fontWeight={600}>Penni Nojel</Paragraph>}
          </FlexBox>

          <Paragraph flex={1} color="text.secondary" ellipsis={upSm}>
            How to Choose the Perfect Shopify Theme and Build Your Online Store Fast!
          </Paragraph>

          <Small className="time" color="text.secondary">
            1:45 PM
          </Small>

          <MailActionWrapper className="actions">
            <Tooltip title="Archive">
              <IconButton color="secondary">
                <Archive fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Trash">
              <IconButton color="secondary">
                <Trash fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Unread">
              <IconButton color="secondary">
                <UnreadMail fontSize="small" />
              </IconButton>
            </Tooltip>
          </MailActionWrapper>
        </MailItem>)}
    </Layout>;
}