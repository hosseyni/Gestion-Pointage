import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsagersComponent } from './usagers/usagers.component';

const routes: Routes = [
  {path:'',component:UsagersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsagersRoutingModule { }
