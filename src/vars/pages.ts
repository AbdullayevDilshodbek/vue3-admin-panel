const pages = [
  {
    id: 1,
    title: 'Asosiy',
    items: [
      {
        id: 1,
        title: 'Dashboard',
        icon: 'mdi-monitor-dashboard',
        path: '/',
        rules: []
      },
      {
        id: 2,
        title: 'Foydalanuvchilar',
        icon: 'mdi-account-group-outline',
        path: '/user',
        rules: []
      },
      {
        id: 3,
        title: 'Tashkilotlar',
        icon: 'mdi-account-group-outline',
        path: '/organization',
        rules: []
      }
    ]
  },
  {
    id: 2,
    title: 'Sozlamalar',
    items: [
      {
        id: 2,
        title: 'Profile',
        icon: 'mdi-account-outline',
        path: '/profile',
        rules: []
      },
      {
        id: 3,
        title: 'Settings',
        icon: 'mdi-cog-outline',
        path: '/settings',
        rules: []
      }
    ]
  }
]

export default pages
