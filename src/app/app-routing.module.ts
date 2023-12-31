import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user.module').then((_) => _.UserModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((_) => _.AdminModule)
  },
  {
    path: 'pract',
    loadChildren: () => import('./practice/practice.module').then((_) => _.PracticeModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
