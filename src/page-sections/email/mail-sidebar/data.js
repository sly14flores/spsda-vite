import { nanoid } from 'nanoid'; // MUI ICON COMPONENTS

import SendTwoTone from '@mui/icons-material/SendTwoTone'; // CUSTOM ICON COMPONENTS

import Mail from '@/icons/duotone/Mail';
import Edit from '@/icons/duotone/Edit';
import Trash from '@/icons/duotone/Trash';
import Inbox from '@/icons/duotone/Inbox';
import Report from '@/icons/duotone/Report';
import StartHalf from '@/icons/duotone/StarHalf'; // CUSTOM DUMMY DATA SET

export const LIST_ITEMS = [{
  value: 0,
  Icon: Mail,
  id: nanoid(),
  title: 'All Mail',
  url: '/dashboard/mail/all'
}, {
  value: 16,
  Icon: Inbox,
  id: nanoid(),
  title: 'Inbox',
  url: '/dashboard/mail/inbox'
}, {
  value: 0,
  Icon: SendTwoTone,
  id: nanoid(),
  title: 'Sent',
  url: '/dashboard/mail/sent'
}, {
  value: 0,
  Icon: Edit,
  id: nanoid(),
  title: 'Draft',
  url: '#'
}, {
  value: 0,
  Icon: StartHalf,
  id: nanoid(),
  title: 'Starred',
  url: '#'
}, {
  value: 0,
  Icon: Report,
  id: nanoid(),
  title: 'Spam',
  url: '#'
}, {
  value: 0,
  Icon: Trash,
  id: nanoid(),
  title: 'Trash',
  url: '#'
}];
export const LABELS = [{
  value: 0,
  id: nanoid(),
  title: 'Personal',
  color: 'primary.main'
}, {
  value: 0,
  id: nanoid(),
  title: 'Company',
  color: 'success.main'
}, {
  value: 0,
  id: nanoid(),
  title: 'Important',
  color: 'warning.main'
}, {
  value: 0,
  id: nanoid(),
  title: 'Private',
  color: 'error.main'
}];