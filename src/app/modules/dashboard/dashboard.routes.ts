import {dashboardRouteNames} from './dashboard-routes.names';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {IndexComponent} from './index/index.component';


export const DASHBOARD_ROUTES = [
  {
    path: '',
    redirectTo: dashboardRouteNames.DASHBOARD,
    pathMatch: 'full'
  },
  {
    path: dashboardRouteNames.DASHBOARD,
    component: IndexComponent,
    children: [
      {
        path: '',
        redirectTo: dashboardRouteNames.HOME,
        pathMatch: 'full'
      },
      {
        path: dashboardRouteNames.HOME,
        component: DashboardHomeComponent,
      },
    ]
  }
];
