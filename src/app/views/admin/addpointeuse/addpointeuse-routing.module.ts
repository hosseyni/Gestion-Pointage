import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpointeuseComponent } from './addpointeuse/addpointeuse.component';

const routes: Routes = [
  {path:'',component:AddpointeuseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddpointeuseRoutingModule { }
