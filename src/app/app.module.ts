import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {ChartsModule} from "ng2-charts";
import {DASHBOARD_ROUTES} from "./dashboard.routes";
import {ApiService} from "./services/api.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(DASHBOARD_ROUTES),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
