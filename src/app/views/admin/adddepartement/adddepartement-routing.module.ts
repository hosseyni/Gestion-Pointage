import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddepartementComponent } from './adddepartement/adddepartement.component';

const routes: Routes = [
  {path:'',component:AdddepartementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdddepartementRoutingModule { }
