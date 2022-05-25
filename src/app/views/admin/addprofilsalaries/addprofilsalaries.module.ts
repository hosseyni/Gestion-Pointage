import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddprofilsalariesComponent } from './addprofilsalaries/addprofilsalaries.component';
import { AddprofilsalariesRoutingModule } from './addprofilsalaries-routing.module';



@NgModule({
  declarations: [
    AddprofilsalariesComponent
  ],
  imports: [
    CommonModule,
    AddprofilsalariesRoutingModule
  ]
})
export class AddprofilsalariesModule { }
