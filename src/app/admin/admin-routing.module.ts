import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component'; 
import { ProductComponent } from './components/product/product.component';
import { UsersComponent } from './components/users/users.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

const routes: Routes = [
  {
    path:'',
    component:AdminLandingComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'login',
    component:AdminLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
