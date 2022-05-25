import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsessionComponent } from './addsession/addsession.component';

const routes: Routes = [
  {path:'',component:AddsessionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddsessionRoutingModule { }
