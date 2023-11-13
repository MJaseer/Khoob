import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminLandingComponent } from './components/admin-landing/admin-landing.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { ProductComponent } from './components/product/product.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';


@NgModule({
  declarations: [
    AdminLandingComponent,
    DashboardComponent,
    UsersComponent,
    ProductComponent,
    AdminLoginComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
