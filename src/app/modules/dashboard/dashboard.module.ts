import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import {RouterModule} from '@angular/router';
import {DASHBOARD_ROUTES} from './dashboard.routes';
import { IndexComponent } from './index/index.component';
import {ChartsModule} from 'ng2-charts';



@NgModule({
  declarations: [DashboardHomeComponent, IndexComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(DASHBOARD_ROUTES),
    ChartsModule,
  ]
})
export class DashboardModule { }
