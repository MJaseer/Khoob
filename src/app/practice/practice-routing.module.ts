import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompOneComponent } from './components/comp-one/comp-one.component';

const routes: Routes = [
  {path:'', component:CompOneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
