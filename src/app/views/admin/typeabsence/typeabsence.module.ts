import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeabsenceRoutingModule } from './typeabsence-routing.module';
import { TypeabsenceComponent } from './typeabsence/typeabsence.component';


@NgModule({
  declarations: [
    TypeabsenceComponent
  ],
  imports: [
    CommonModule,
    TypeabsenceRoutingModule
  ]
})
export class TypeabsenceModule { }
