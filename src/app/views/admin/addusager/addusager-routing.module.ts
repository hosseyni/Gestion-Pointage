import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddusagerComponent } from './addusager/addusager.component';

const routes: Routes = [
  {path:'',component:AddusagerComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddusagerRoutingModule { }
