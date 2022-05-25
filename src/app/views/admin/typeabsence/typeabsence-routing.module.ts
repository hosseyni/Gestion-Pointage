import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeabsenceComponent } from './typeabsence/typeabsence.component';

const routes: Routes = [
  {path:'',component:TypeabsenceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeabsenceRoutingModule { }
