
import Home from '@/screen/Home/Home'

import accounting from './normal/accounting'
import order from './normal/order'
import sign from './auth/sign'
import widget from './special/widget'
import dashboard from './special/dashboard'

import work from './special/work'

const ADMIN_ROOT = '/admin'

const AllRoutes = [
    {
      path: ADMIN_ROOT,
      component: Home,
      redirect: ADMIN_ROOT + '/order',
      children: [
        ...work(ADMIN_ROOT + '/work'),
        ...order(ADMIN_ROOT + '/order'),
        ...dashboard(ADMIN_ROOT + '/dashboard'),
        ...accounting(ADMIN_ROOT + '/accounting'),
      ]
    },
    {
      path: '',
      redirect: ADMIN_ROOT,
      meta: { title: '首页' }
    },
    ...sign(),
    ...widget(),
]


export default AllRoutes