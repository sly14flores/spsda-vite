export default {
  ordered: ['todo', 'progress', 'done'],
  columns: {
    done: {
      id: 'done',
      name: 'Done',
      todoIds: ['04']
    },
    todo: {
      id: 'todo',
      name: 'To Do',
      todoIds: ['01', '02']
    },
    progress: {
      id: 'progress',
      name: 'In Progress',
      todoIds: ['03']
    }
  },
  todos: {
    '01': {
      id: '01',
      title: 'Create Minimal Logo',
      date: '9/17/2021',
      description: 'Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.',
      author: {
        name: 'Tom Cruise',
        image: '/static/avatar/001-man.svg'
      },
      statusColor: 'primary.main'
    },
    '02': {
      id: '02',
      title: 'Therapy Session',
      date: '9/17/2021',
      description: 'Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.',
      author: {
        name: 'Tom Cruise',
        image: '/static/avatar/002-girl.svg'
      },
      statusColor: 'primary.red'
    },
    '03': {
      id: '03',
      title: 'Create Minimal Logo',
      date: '9/17/2021',
      description: 'Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.',
      author: {
        name: 'Tom Cruise',
        image: '/static/avatar/005-man-1.svg'
      },
      statusColor: 'primary.main'
    },
    '04': {
      id: '04',
      title: 'Website UI Design',
      date: '9/17/2021',
      description: 'Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.',
      author: {
        name: 'Tom Cruise',
        image: '/static/avatar/011-man-2.svg'
      },
      statusColor: 'primary.yellow'
    }
  }
};