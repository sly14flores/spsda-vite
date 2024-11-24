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
    icon: duotone.Apps,
  },
  { // Admin
    name: 'Teachers',
    path: '/teachers',
    icon: duotone.PersonChalkboard,
  },
  { // Admin
    name: 'Subjects',
    path: '/subjects',
    icon: duotone.Folder,
  },
  { // Teacher
    name: 'Students',
    path: '/students',
    icon: duotone.PersonCircleCheck,
  },
  { // Teacher
    name: 'Class',
    path: '/class',
    icon: duotone.UserList,
  },  
  { // Teacher
    name: 'Reports',
    path: '/reports',
    icon: duotone.Report,
  },  
  {
    name: 'Maintenance',
    icon: duotone.TodoList,
    children: [
      {
        name: 'School Years',
        path: '/school-years'
      },
      {
        name: 'Levels',
        path: '/levels'
      },
      {
        name: 'Sections',
        path: '/sections'
      },      
    ]
  }
];