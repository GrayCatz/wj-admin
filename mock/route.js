import { Constant } from './_utils'

const { ApiPrefix } = Constant

const database = [
  // {
  //   id: '1',
  //   icon: 'dashboard',
  //   name: 'Dashboard',
  //   zhName: '仪表盘',
  //   route: '/dashboard',
  // },
  {
    id: '1',
    name: '图库',
    zhName: '图库',
    icon: 'user',
    route: '/picture',
  },
  {
    id: '2',
    name: '类别',
    zhName: '类别',
    icon: 'user',
    route: '/category',
  },
  {
    id: '3',
    name: '品牌',
    zhName: '品牌',
    icon: 'user',
    route: '/picture',
  },
  {
    id: '4',
    name: '产品',
    zhName: '产品',
    icon: 'user',
    route: '/picture',
  },
  {
    id: '5',
    name: '订单列表',
    zhName: '订单列表',
    icon: 'user',
    route: '/picture',
  },
  {
    id: '6',
    name: '报表',
    zhName: '报表',
    icon: 'user',
    route: '/picture',
  },
  {
    id: '7',
    name: '账号权限',
    zhName: '账号权限',
    icon: 'user',
    route: '/picture',
  },
  {
    id: '8',
    name: '用户',
    zhName: '用户',
    icon: 'user',
    route: '/user',
  },

  // {
  //   id: '2',
  //   breadcrumbParentId: '1',
  //   name: 'Users',
  //   zhName: '用户管理',
  //   icon: 'user',
  //   route: '/user',
  // },
  // {
  //   id: '7',
  //   breadcrumbParentId: '1',
  //   name: 'Posts',
  //   zhName: '文章管理',
  //   icon: 'shopping-cart',
  //   route: '/post',
  // },
  // {
  //   id: '21',
  //   menuParentId: '-1',
  //   breadcrumbParentId: '2',
  //   name: 'User Detail',
  //   zhName: '用户详情',
  //   route: '/user/:id',
  // },
  // {
  //   id: '3',
  //   breadcrumbParentId: '1',
  //   name: 'Request',
  //   zhName: 'Request',
  //   icon: 'api',
  //   route: '/request',
  // },
  // {
  //   id: '4',
  //   breadcrumbParentId: '1',
  //   name: 'UI Element',
  //   zhName: 'UI组件',
  //   icon: 'camera-o',
  // },
  // {
  //   id: '45',
  //   breadcrumbParentId: '4',
  //   menuParentId: '4',
  //   name: 'Editor',
  //   zhName: 'Editor',
  //   icon: 'edit',
  //   route: '/UIElement/editor',
  // },
  // {
  //   id: '5',
  //   breadcrumbParentId: '1',
  //   name: 'Charts',
  //   zhName: 'Charts',
  //   icon: 'code-o',
  // },
  // {
  //   id: '51',
  //   breadcrumbParentId: '5',
  //   menuParentId: '5',
  //   name: 'ECharts',
  //   zhName: 'ECharts',
  //   icon: 'line-chart',
  //   route: '/chart/ECharts',
  // },
  // {
  //   id: '52',
  //   breadcrumbParentId: '5',
  //   menuParentId: '5',
  //   name: 'HighCharts',
  //   zhName: 'HighCharts',
  //   icon: 'bar-chart',
  //   route: '/chart/highCharts',
  // },
  // {
  //   id: '53',
  //   breadcrumbParentId: '5',
  //   menuParentId: '5',
  //   name: 'Rechartst',
  //   zhName: 'Rechartst',
  //   icon: 'area-chart',
  //   route: '/chart/Recharts',
  // },
]

module.exports = {
  [`GET ${ApiPrefix}/routes`](req, res) {
    res.status(200).json(database)
  },
}
