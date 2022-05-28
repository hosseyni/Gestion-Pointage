import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddusagerComponent } from './addusager/addusager.component';
import { AddusagerRoutingModule } from './addusager-routing.module';



@NgModule({
  declarations: [
    AddusagerComponent
  ],
  imports: [
    CommonModule,
    AddusagerRoutingModule
  ]
})
export class AddusagerModule { }
