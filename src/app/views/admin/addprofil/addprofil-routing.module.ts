import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprofilComponent } from './addprofil/addprofil.component';


const routes: Routes = [
  {path:'',component:AddprofilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddprofilRoutingModule { }
