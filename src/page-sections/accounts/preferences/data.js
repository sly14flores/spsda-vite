import { nanoid } from 'nanoid'; // CUSTOM DUMMY DATA SET

export const PREFERENCES = [{
  id: nanoid(),
  checked: false,
  title: 'Successful Payments',
  subtitle: 'Receive a notification for every successful payment.'
}, {
  id: nanoid(),
  checked: true,
  title: 'Payouts',
  subtitle: 'Receive a notification for every initiated payout.'
}, {
  id: nanoid(),
  checked: true,
  title: 'Fee Collection',
  subtitle: 'Receive a notification for every initiated payout.'
}, {
  id: nanoid(),
  checked: false,
  title: 'Invoice Payments',
  subtitle: 'Receive a notification for every initiated payout.'
}];