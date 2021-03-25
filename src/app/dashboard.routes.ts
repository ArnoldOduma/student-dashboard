import {dashboardRouteNames} from "./dashboard-routes.names";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppComponent} from "./app.component";

export const DASHBOARD_ROUTES = [

  {
    path: '',
    redirectTo: dashboardRouteNames.HOME,
    pathMatch: 'full'
  },
  {
    path: dashboardRouteNames.HOME,
    component: DashboardComponent
  },
  // {
  //   path: '',
  //   redirectTo: dashboardRouteNames.DASHBOARD,
  //   pathMatch: 'full'
  // },
  // {
  //   path: dashboardRouteNames.DASHBOARD,
  //   component: AppComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: dashboardRouteNames.HOME,
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: dashboardRouteNames.HOME,
  //       component: DashboardComponent
  //     },
  //   ]
  // }
];
