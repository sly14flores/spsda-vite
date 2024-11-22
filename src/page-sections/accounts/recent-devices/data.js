import { nanoid } from 'nanoid';
export const HEAD_CELLS = ['Browser', 'Device', 'Location', 'Recent Activity'];
export const ACTIVITY_LIST = [{
  id: nanoid(),
  current: true,
  recentActivity: 'Now',
  device: 'Dell XPS 12',
  location: 'New York, USA',
  browser: 'Chrome on Windows',
  browserIcon: '/static/browser/chrome.svg'
}, {
  id: nanoid(),
  device: 'Acer Aspire 300',
  location: 'New York, USA',
  browser: 'Mozilla Firefox',
  recentActivity: '15 June 2020',
  browserIcon: '/static/browser/mozilla.svg'
}, {
  id: nanoid(),
  location: 'London, UK',
  browser: 'Safari Browser',
  device: 'Macbook Pro 2020',
  recentActivity: '05 October 2020',
  browserIcon: '/static/browser/safari.svg'
}, {
  id: nanoid(),
  browser: 'Apple Browser',
  location: 'Manchester, UK',
  device: 'IPhone 13 Pro Max',
  recentActivity: '05 October 2020',
  browserIcon: '/static/browser/apple.svg'
}];