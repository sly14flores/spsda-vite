// CUSTOM ICON COMPONENT
import duotone from '@/icons/duotone'; // ==============================================================

// ==============================================================
export const navigations = [{
  type: 'label',
  label: 'Dashboard'
}, {
  name: 'Analytics',
  icon: duotone.PersonChalkboard,
  children: [{
    name: 'Analytics 1',
    path: '/demo/dashboard'
  }, {
    name: 'Analytics 2',
    path: '/demo/dashboard/analytics-2'
  }]
}, {
  name: 'Finance',
  icon: duotone.MessagesDollar,
  children: [{
    name: 'Finance 1',
    path: '/demo/dashboard/finance'
  }, {
    name: 'Finance 2',
    path: '/demo/dashboard/finance-2'
  }]
}, {
  name: 'CRM',
  icon: duotone.CommentsQuestionCheck,
  children: [{
    name: 'CRM',
    path: '/demo/dashboard/crm'
  }, {
    name: 'CRM 2',
    path: '/demo/dashboard/crm-2'
  }]
}, {
  name: 'Sales',
  icon: duotone.Ecommerce,
  children: [{
    name: 'Sales',
    path: '/demo/dashboard/sales'
  }, {
    name: 'Sales 2',
    path: '/demo/dashboard/sales-2'
  }]
}, {
  name: 'Ecommerce',
  path: '/demo/dashboard/ecommerce',
  icon: duotone.RectangleCirclePlus
}, {
  name: 'Logistics',
  path: '/demo/dashboard/logistics',
  icon: duotone.DiagramProject
}, {
  name: 'Marketing',
  path: '/demo/dashboard/marketing',
  icon: duotone.LayerGroup
}, {
  name: 'LMS',
  path: '/demo/dashboard/learning-management',
  icon: duotone.PersonCircleCheck
}, {
  name: 'Job Management',
  path: '/demo/dashboard/job-management',
  icon: duotone.PersonCircleCheck
}, {
  type: 'label',
  label: 'Management'
}, {
  name: 'Profile',
  icon: duotone.UserProfile,
  path: '/demo/dashboard/profile'
}, {
  name: 'Account',
  icon: duotone.Accounts,
  path: '/demo/dashboard/account'
}, {
  name: 'Users',
  icon: duotone.UserList,
  children: [{
    name: 'Add User',
    path: '/demo/dashboard/add-user'
  }, {
    name: 'User List 1',
    path: '/demo/dashboard/user-list'
  }, {
    name: 'User Grid 1',
    path: '/demo/dashboard/user-grid'
  }, {
    name: 'User List 2',
    path: '/demo/dashboard/user-list-2'
  }, {
    name: 'User Grid 2',
    path: '/demo/dashboard/user-grid-2'
  }]
}, {
  name: 'Products',
  icon: duotone.AdminEcommerce,
  children: [{
    name: 'Product List',
    path: '/demo/dashboard/product-list'
  }, {
    name: 'Product Grid',
    path: '/demo/dashboard/product-grid'
  }, {
    name: 'Create Product',
    path: '/demo/dashboard/create-product'
  }, {
    name: 'Product Details',
    path: '/demo/dashboard/product-details'
  }]
}, {
  name: 'Invoice',
  icon: duotone.Invoice,
  children: [{
    name: 'Invoice List',
    path: '/demo/dashboard/invoice-list'
  }, {
    name: 'Invoice Details',
    path: '/demo/dashboard/invoice-details'
  }, {
    name: 'Create Invoice',
    path: '/demo/dashboard/create-invoice'
  }]
}, {
  name: 'Ecommerce',
  icon: duotone.Ecommerce,
  children: [{
    name: 'Cart',
    path: '/demo/dashboard/cart'
  }, {
    name: 'Payment',
    path: '/demo/dashboard/payment'
  }, {
    name: 'Billing Address',
    path: '/demo/dashboard/billing-address'
  }, {
    name: 'Payment Complete',
    path: '/demo/dashboard/payment-complete'
  }]
}, {
  name: 'Projects',
  icon: duotone.ProjectChart,
  children: [{
    name: 'Project 1',
    path: '/demo/dashboard/projects/version-1'
  }, {
    name: 'Project 2',
    path: '/demo/dashboard/projects/version-2'
  }, {
    name: 'Project 3',
    path: '/demo/dashboard/projects/version-3'
  }, {
    name: 'Project Details',
    path: '/demo/dashboard/projects/details'
  }, {
    name: 'Team Member',
    path: '/demo/dashboard/projects/team-member'
  }]
}, {
  name: 'Data Table',
  icon: duotone.DataTable,
  children: [{
    name: 'Data Table 1',
    path: '/demo/dashboard/data-table-1'
  }]
}, {
  type: 'label',
  label: 'Apps'
}, {
  name: 'Todo List',
  icon: duotone.TodoList,
  path: '/demo/dashboard/todo-list'
}, {
  name: 'Chats',
  icon: duotone.Chat,
  path: '/demo/dashboard/chat'
}, {
  name: 'Email',
  icon: duotone.Inbox,
  children: [{
    name: 'Inbox',
    path: '/demo/dashboard/mail/all'
  }, {
    name: 'Email Details',
    path: '/demo/dashboard/mail/details'
  }, {
    name: 'Create Email',
    path: '/demo/dashboard/mail/compose'
  }]
}, {
  name: 'Pages',
  icon: duotone.Pages,
  children: [{
    iconText: 'E',
    name: 'Ecommerce',
    path: '#ecommerce',
    children: [{
      name: 'Shop',
      path: '/demo/products'
    }, {
      name: 'Product Details',
      path: '/demo/products/Wu4GdphiI0F48eMQZ_zBJ'
    }, {
      name: 'Cart',
      path: '/demo/cart'
    }, {
      name: 'Checkout',
      path: '/demo/checkout'
    }]
  }, {
    iconText: 'C',
    name: 'Career',
    path: '#career',
    children: [{
      name: 'Career (Admin)',
      path: '/demo/dashboard/career'
    }, {
      name: 'Career (Public)',
      path: '/demo/career'
    }, {
      name: 'Job Details',
      path: '/demo/career/designer'
    }, {
      name: 'Job Apply',
      path: '/demo/career/apply'
    }]
  }, {
    name: 'About (Admin)',
    path: '/demo/dashboard/about'
  }, {
    name: 'About (Public)',
    path: '/demo/about-us'
  }, {
    name: 'Contact',
    path: '/demo/contact-us'
  }, {
    name: 'Faq',
    path: '/demo/faqs'
  }, {
    name: 'Pricing',
    path: '/demo/pricing'
  }, {
    name: 'Support',
    path: '/demo/dashboard/support'
  }, {
    name: 'Create Ticket',
    path: '/demo/dashboard/create-ticket'
  }, {
    name: 'File Manager',
    path: '/demo/dashboard/file-manager'
  }]
}, {
  type: 'extLink',
  name: 'Documentation',
  icon: duotone.FileCircleQuestion,
  path: 'https://uko-doc.vercel.app/'
}, {
  type: 'label',
  label: 'Others'
}, {
  path: 'https://uko-doc.vercel.app/',
  name: 'Item Disabled',
  icon: duotone.Folder,
  disabled: true
}, {
  name: 'Multi Level Item',
  icon: duotone.Apps,
  children: [{
    name: 'Level A',
    path: '#dashboard/cart'
  }, {
    iconText: 'B',
    name: 'Level B',
    path: '#dashboard/payment',
    children: [{
      name: 'Level B1',
      path: '#dashboard/payment'
    }, {
      iconText: 'B',
      name: 'Level B2',
      path: '#dashboard/payment',
      children: [{
        name: 'Level B21',
        path: '#dashboard/payment'
      }, {
        name: 'Level B22',
        path: '#dashboard/payment'
      }]
    }]
  }]
}];