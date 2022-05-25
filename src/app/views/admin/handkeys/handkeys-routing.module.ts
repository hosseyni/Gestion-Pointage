import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandkeysComponent } from './handkeys/handkeys.component';

const routes: Routes = [
  {path:'',component:HandkeysComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandkeysRoutingModule { }
