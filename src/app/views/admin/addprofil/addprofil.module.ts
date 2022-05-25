import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddprofilRoutingModule } from './addprofil-routing.module';
import { AddprofilComponent } from './addprofil/addprofil.component';



@NgModule({
  declarations: [
    AddprofilComponent,
   
  ],
  imports: [
    CommonModule,
    AddprofilRoutingModule
  ]
})
export class AddprofilModule { }
