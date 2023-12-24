import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { CompOneComponent } from './components/comp-one/comp-one.component';
import { CompTwoComponent } from './components/comp-two/comp-two.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompOneComponent,
    CompTwoComponent
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    ReactiveFormsModule
  ]
})
export class PracticeModule { }
