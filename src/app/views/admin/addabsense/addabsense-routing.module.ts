import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddabsenseComponent } from './addabsense/addabsense.component';

const routes: Routes = [
  {path:'', component:AddabsenseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddabsenseRoutingModule { }
