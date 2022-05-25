import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddprofilsalariesComponent } from './addprofilsalaries/addprofilsalaries.component';


const routes: Routes = [
  {path:'',component:AddprofilsalariesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddprofilsalariesRoutingModule { }
