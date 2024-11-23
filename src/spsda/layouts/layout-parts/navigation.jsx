// CUSTOM ICON COMPONENT
import duotone from '@/icons/duotone'; // ==============================================================

// ==============================================================
export const navigations = [
  {
    type: 'label',
    label: 'Menu'
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: duotone.Dashboard,
  },
  {
    name: 'Analytics',
    path: '/analytics',
    icon: duotone.PersonChalkboard,
  },
  {
    name: 'Maintenance',
    icon: duotone.TodoList,
    children: [
      {
        name: 'CRM',
        path: '/demo/dashboard/crm'
      },
      {
        name: 'CRM 2',
        path: '/demo/dashboard/crm-2'
      }
    ]
  }
];